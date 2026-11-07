/* =========================================================
   quiz.js : 문제 뽑기 · 문제 풀이 화면 · 결과 화면
   ========================================================= */

const quizState = {
    questions: [],
    index: 0,
    score: 0,
    wrong: []
};

const quizEl = {};

// Firebase 초기화
const firebaseConfig = {
    apiKey: "AIzaSyB3EmGIeyl1ZGedtWZQD1_srecLUg75Ps0",
    authDomain: "successful-careerlife.firebaseapp.com",
    projectId: "successful-careerlife",
    storageBucket: "successful-careerlife.firebasestorage.app",
    messagingSenderId: "401280076063",
    appId: "1:401280076063:web:a8a3d6dc342aed59f3882a",
    measurementId: "G-ZFZKEDYXYE"
};

// Firebase 중복 초기화 방지
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();


/* ---------- 문제 뽑기 ---------- */

function pickQuestions(subjectId, lessonKeys, count) {
    const lessonSet = new Set(lessonKeys);
    const pool = SUBJECT_DATA[subjectId].questions.filter(
        q => lessonSet.has(q.lesson)
    );

    const limit = Math.min(count, pool.length);
    return shuffle(pool).slice(0, limit);
}


/* ---------- 초기화 ---------- */

function initQuiz() {
    // 이미 초기화했다면 이벤트 리스너를 중복 등록하지 않음
    if (quizEl.initialized) return;

    quizEl.progress    = document.getElementById("progress-text");
    quizEl.topic       = document.getElementById("topic-badge");
    quizEl.question    = document.getElementById("question-text");
    quizEl.answer      = document.getElementById("user-answer");
    quizEl.feedback    = document.getElementById("feedback-box");
    quizEl.submitBtn   = document.getElementById("submit-btn");
    quizEl.overrideBtn = document.getElementById("override-btn");
    quizEl.nextBtn     = document.getElementById("next-btn");
    quizEl.resetBtn    = document.getElementById("reset-btn");
    quizEl.saveBtn     = document.getElementById("copy-btn");

    // 필수 HTML 요소가 존재하는지 확인
    const requiredElements = [
        quizEl.progress,
        quizEl.topic,
        quizEl.question,
        quizEl.answer,
        quizEl.feedback,
        quizEl.submitBtn,
        quizEl.overrideBtn,
        quizEl.nextBtn,
        quizEl.resetBtn
    ];

    if (requiredElements.some(el => !el)) {
        console.error("퀴즈 화면의 HTML 요소를 찾을 수 없습니다.");
        return;
    }

    quizEl.submitBtn.addEventListener("click", checkAnswer);
    quizEl.overrideBtn.addEventListener("click", markAsCorrect);
    quizEl.nextBtn.addEventListener("click", nextQuestion);

    quizEl.answer.addEventListener("keydown", e => {
        if (e.key === "Enter" && !e.isComposing) {
            checkAnswer();
        }
    });

    // 처음으로 돌아가기
    quizEl.resetBtn.addEventListener("click", resetQuiz);

    // 오답노트 클라우드 저장
    if (quizEl.saveBtn) {
        quizEl.saveBtn.textContent = "오답노트 클라우드 저장";
        quizEl.saveBtn.addEventListener("click", saveWrongNotesToFirebase);
    }

    quizEl.initialized = true;
}


/* ---------- 문제 풀이 ---------- */

function startQuiz(questions) {
    if (!questions || questions.length === 0) {
        alert("선택한 범위에 등록된 문제가 없습니다.");
        return;
    }

    quizState.questions = questions;
    quizState.index = 0;
    quizState.score = 0;
    quizState.wrong = [];

    showScreen("quiz-screen");
    loadQuestion();
}


function loadQuestion() {
    const q = quizState.questions[quizState.index];

    quizEl.progress.textContent =
        `문제 ${quizState.index + 1} / ${quizState.questions.length}`;

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


/* ---------- 정답 확인 ---------- */

function checkAnswer() {
    if (quizEl.answer.disabled) return;

    const userAns = quizEl.answer.value.trim();

    if (!userAns) {
        alert("정답을 입력해주세요!");
        return;
    }

    const q = quizState.questions[quizState.index];
    const isCorrect = userAns === String(q.answer).trim();

    quizEl.feedback.classList.remove("hidden");
    quizEl.answer.disabled = true;
    quizEl.submitBtn.classList.add("hidden");

    if (isCorrect) {
        quizState.score++;

        quizEl.feedback.className =
            "p-4 rounded-xl text-sm space-y-2 bg-emerald-50 text-emerald-800 border border-emerald-200";

        quizEl.feedback.innerHTML =
            `<strong>정답입니다!</strong><br>
            💡 <strong>핵심 개념:</strong> ${escapeHtml(q.explanation)}`;

    } else {
        quizState.wrong.push({ ...q, userAns });

        quizEl.feedback.className =
            "p-4 rounded-xl text-sm space-y-2 bg-rose-50 text-rose-800 border border-rose-200";

        quizEl.feedback.innerHTML =
            `<strong>오답입니다.</strong><br>
            내 정답: ${escapeHtml(userAns)} /
            정답: <strong>${escapeHtml(q.answer)}</strong>
            <br>💡 <strong>핵심 개념:</strong>
            ${escapeHtml(q.explanation)}`;

        quizEl.overrideBtn.classList.remove("hidden");
    }

    quizEl.nextBtn.classList.remove("hidden");
}


/* ---------- 정답 처리 변경 ---------- */

function markAsCorrect() {
    if (quizState.wrong.length === 0) return;

    quizState.score++;
    quizState.wrong.pop();

    quizEl.feedback.className =
        "p-4 rounded-xl text-sm space-y-2 bg-emerald-50 text-emerald-800 border border-emerald-200";

    quizEl.feedback.innerHTML +=
        `<br><strong class="text-emerald-700">
        사용자에 의해 정답으로 처리되었습니다.
        </strong>`;

    quizEl.overrideBtn.classList.add("hidden");
}


/* ---------- 다음 문제 ---------- */

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

    const rate = total > 0
        ? Math.round((quizState.score / total) * 100)
        : 0;

    document.getElementById("accuracy-rate").textContent =
        `${rate}%`;

    document.getElementById("score-summary").textContent =
        `맞은 개수: ${quizState.score} / 전체: ${total}`;

    const wrongListDiv = document.getElementById("wrong-list");
    wrongListDiv.innerHTML = "";

    if (quizState.wrong.length === 0) {
        wrongListDiv.innerHTML =
            "<p class='text-sm text-slate-400 text-center py-4'>틀린 문제가 없습니다! 완벽해요!</p>";
        return;
    }

    quizState.wrong.forEach((item, idx) => {
        const div = document.createElement("div");

        div.className =
            "p-3 bg-slate-50 rounded-xl border text-sm space-y-1";

        div.innerHTML = `
            <p class="font-semibold text-slate-700">
                Q${idx + 1}. ${escapeHtml(item.question)}
            </p>

            <p class="text-rose-600">
                내 답: ${escapeHtml(item.userAns)} |
                <strong>정답: ${escapeHtml(item.answer)}</strong>
            </p>

            <p class="text-xs text-slate-500">
                💡 ${escapeHtml(item.explanation)}
            </p>
        `;

        wrongListDiv.appendChild(div);
    });
}


/* ---------- 오답노트 클라우드 저장 ---------- */

async function saveWrongNotesToFirebase() {
    if (quizState.wrong.length === 0) {
        alert("저장할 오답이 없습니다!");
        return;
    }

    try {
        const wrongNotesData = {
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),

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

        await db.collection("wrong_notes").add(wrongNotesData);

        alert("오답노트가 파이어베이스 클라우드에 안전하게 저장되었습니다!");

    } catch (error) {
        console.error("오답노트 저장 실패:", error);

        alert(
            "오답노트 저장 중 오류가 발생했습니다. 콘솔을 확인해주세요."
        );
    }
}


/* ---------- 처음으로 돌아가기 ---------- */

function resetQuiz() {
    // 현재 학습 데이터 초기화
    quizState.questions = [];
    quizState.index = 0;
    quizState.score = 0;
    quizState.wrong = [];

    // 입력창 초기화
    if (quizEl.answer) {
        quizEl.answer.value = "";
        quizEl.answer.disabled = false;
    }

    // 결과 화면의 이전 오답 목록 제거
    const wrongListDiv = document.getElementById("wrong-list");

    if (wrongListDiv) {
        wrongListDiv.innerHTML = "";
    }

    // 설정 화면으로 이동
    showScreen("setup-screen");
}


/* ---------- DOM 로딩 후 초기화 ---------- */

// JS 파일이 HTML보다 먼저 실행되어도 정상 작동하도록 처리
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initQuiz);
} else {
    initQuiz();
}
