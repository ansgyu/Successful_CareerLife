/* =========================================================
   quiz.js : 문제 뽑기 · 문제 풀이 화면 · 결과 화면
   ========================================================= */

const quizState = {
    questions: [],   // 이번 학습에서 풀 문제들 (중복 없음)
    index: 0,
    score: 0,
    wrong: []        // 오답 목록
};

const quizEl = {};

const firebaseConfig = {
    apiKey: "AIzaSyB3EmGIeyl1ZGedtWZQD1_srecLUg75Ps0",
    authDomain: "successful-careerlife.firebaseapp.com",
    projectId: "successful-careerlife",
    storageBucket: "successful-careerlife.firebasestorage.app",
    messagingSenderId: "401280076063",
    appId: "1:401280076063:web:a8a3d6dc342aed59f3882a",
    measurementId: "G-ZFZKEDYXYE"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

/* ---------- 문제 뽑기 ---------- */

/**
 * 선택한 과목/강 범위 안에서 문제를 무작위로 뽑습니다.
 * - 전체 범위를 한 번 섞은 뒤 앞에서부터 자르므로, 같은 문제가 두 번 나오지 않습니다.
 * - 요청한 문항 수가 등록된 문항 수보다 많으면, 등록된 문항 수까지만 뽑습니다.
 */
function pickQuestions(subjectId, lessonKeys, count) {
    const lessonSet = new Set(lessonKeys);
    const pool = SUBJECT_DATA[subjectId].questions.filter(q => lessonSet.has(q.lesson));
    const limit = Math.min(count, pool.length);
    return shuffle(pool).slice(0, limit);
}

/* ---------- 초기화 ---------- */

function initQuiz() {
    quizEl.progress    = document.getElementById("progress-text");
    quizEl.topic       = document.getElementById("topic-badge");
    quizEl.question    = document.getElementById("question-text");
    quizEl.answer      = document.getElementById("user-answer");
    quizEl.feedback    = document.getElementById("feedback-box");
    quizEl.submitBtn   = document.getElementById("submit-btn");
    quizEl.overrideBtn = document.getElementById("override-btn");
    quizEl.nextBtn     = document.getElementById("next-btn");

    quizEl.submitBtn.addEventListener("click", checkAnswer);
    quizEl.overrideBtn.addEventListener("click", markAsCorrect);
    quizEl.nextBtn.addEventListener("click", nextQuestion);
    quizEl.answer.addEventListener("keydown", e => {
        if (e.key === "Enter" && !e.isComposing) checkAnswer();   // 한글 입력 중 Enter 는 제외
    });

    document.getElementById("copy-btn").addEventListener("click", copyWrongNotes);
    document.getElementById("reset-btn").addEventListener("click", resetQuiz);
}

/* ---------- 문제 풀이 ---------- */

function startQuiz(questions) {
    quizState.questions = questions;
    quizState.index = 0;
    quizState.score = 0;
    quizState.wrong = [];

    showScreen("quiz-screen");
    loadQuestion();
}

function loadQuestion() {
    const q = quizState.questions[quizState.index];

    quizEl.progress.textContent = `문제 ${quizState.index + 1} / ${quizState.questions.length}`;
    quizEl.topic.textContent = `${q.lesson} | ${q.topic}`;
    quizEl.question.textContent = q.question;

    quizEl.answer.value = "";
    quizEl.answer.disabled = false;

    quizEl.feedback.classList.add("hidden");
    quizEl.feedback.innerHTML = "";

    quizEl.submitBtn.classList.remove("hidden");
    quizEl.overrideBtn.classList.add("hidden");
    quizEl.nextBtn.classList.add("hidden");
    quizEl.answer.focus();
}

function checkAnswer() {
    if (quizEl.answer.disabled) return;   // 이미 채점한 문제

    const userAns = quizEl.answer.value.trim();
    if (!userAns) {
        alert("정답을 입력해주세요!");
        return;
    }

    const q = quizState.questions[quizState.index];
    const isCorrect = userAns === q.answer;

    quizEl.feedback.classList.remove("hidden");
    quizEl.answer.disabled = true;
    quizEl.submitBtn.classList.add("hidden");

    if (isCorrect) {
        quizState.score++;
        quizEl.feedback.className = "p-4 rounded-xl text-sm space-y-2 bg-emerald-50 text-emerald-800 border border-emerald-200";
        quizEl.feedback.innerHTML =
            `<strong>정답입니다! 🎉</strong><br>💡 <strong>핵심 개념:</strong> ${escapeHtml(q.explanation)}`;
    } else {
        quizState.wrong.push({ ...q, userAns });
        quizEl.feedback.className = "p-4 rounded-xl text-sm space-y-2 bg-rose-50 text-rose-800 border border-rose-200";
        quizEl.feedback.innerHTML =
            `<strong>오답입니다. 🥲</strong><br>내 정답: ${escapeHtml(userAns)} / 정답: <strong>${escapeHtml(q.answer)}</strong>` +
            `<br>💡 <strong>핵심 개념:</strong> ${escapeHtml(q.explanation)}`;
        quizEl.overrideBtn.classList.remove("hidden");
    }
    quizEl.nextBtn.classList.remove("hidden");
}

/** 오답 처리된 문제를 사용자가 정답으로 바꿉니다. */
function markAsCorrect() {
    if (quizState.wrong.length === 0) return;

    quizState.score++;
    quizState.wrong.pop();   // 방금 추가된 오답 제거

    quizEl.feedback.className = "p-4 rounded-xl text-sm space-y-2 bg-emerald-50 text-emerald-800 border border-emerald-200";
    quizEl.feedback.innerHTML += `<br><strong class='text-emerald-700'>✅ 사용자에 의해 정답으로 처리되었습니다.</strong>`;
    quizEl.overrideBtn.classList.add("hidden");
}

function nextQuestion() {
    quizState.index++;
    if (quizState.index < quizState.questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

/* ---------- 결과 화면 ---------- */

function showResult() {
    showScreen("result-screen");

    const total = quizState.questions.length;
    const rate = Math.round((quizState.score / total) * 100);

    document.getElementById("accuracy-rate").textContent = `${rate}%`;
    document.getElementById("score-summary").textContent = `맞은 개수: ${quizState.score} / 전체: ${total}`;

    const wrongListDiv = document.getElementById("wrong-list");
    wrongListDiv.innerHTML = "";

    if (quizState.wrong.length === 0) {
        wrongListDiv.innerHTML = "<p class='text-sm text-slate-400 text-center py-4'>틀린 문제가 없습니다! 완벽해요! 👏</p>";
        return;
    }

    quizState.wrong.forEach((item, idx) => {
        const div = document.createElement("div");
        div.className = "p-3 bg-slate-50 rounded-xl border text-sm space-y-1";
        div.innerHTML = `
            <p class='font-semibold text-slate-700'>Q${idx + 1}. ${escapeHtml(item.question)}</p>
            <p class='text-rose-600'>내 답: ${escapeHtml(item.userAns)} | <strong>정답: ${escapeHtml(item.answer)}</strong></p>
            <p class='text-xs text-slate-500'>💡 ${escapeHtml(item.explanation)}</p>
        `;
        wrongListDiv.appendChild(div);
    });
}

// initQuiz() 함수 내부 또는 적절한 위치에 추가
const saveBtn = document.getElementById("copy-btn"); // HTML 버튼 ID에 맞춰 수정하세요 (예: "save-wrong-btn" 등)
if (saveBtn) {
    saveBtn.textContent = "오답노트 클라우드 저장"; // 버튼 텍스트 변경 (선택사항)
    saveBtn.addEventListener("click", saveWrongNotesToFirebase);
}

async function saveWrongNotesToFirebase() {
    if (quizState.wrong.length === 0) {
        alert("저장할 오답이 없습니다! 완벽해요! 👏");
        return;
    }

    try {
        const wrongNotesData = {
            createdAt: new Date(), // 저장 시점 (서버 타임스탬프 또는 JS Date)
            score: quizState.score,
            total: quizState.questions.length,
            wrongItems: quizState.wrong.map(item => ({
                question: item.question,
                userAns: item.userAns,
                answer: item.answer,
                explanation: item.explanation,
                lesson: item.lesson || "",
                topic: item.topic || ""
            }))
        };

        // Firestore의 'wrong_notes' 컬렉션에 데이터 추가
        await db.collection("wrong_notes").add(wrongNotesData);
        
        alert("오답노트가 파이어베이스 클라우드에 안전하게 저장되었습니다! ☁️");
    } catch (error) {
        console.error("오답노트 저장 실패:", error);
        alert("오답노트 저장 중 오류가 발생했습니다. 콘솔을 확인해주세요.");
    }
}

function resetQuiz() {
    showScreen("setup-screen");   // 이전에 선택한 과목/강/문항 수는 그대로 유지됩니다
}
