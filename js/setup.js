/* =========================================================
   setup.js : 메인 화면 (과목 · 강 · 문항 수 선택)
   ========================================================= */

const setupState = {
    subjectId: null,
    selectedLessons: new Set(),   // 선택된 강 ("01강" 형식)
    countMode: "manual"           // "manual": 숫자 직접/버튼 선택, "all": 전체 문항
};

const setupEl = {};

/* ---------- 초기화 ---------- */

function initSetup() {
    setupEl.subjectSelect = document.getElementById("subject-select");
    setupEl.lessonSummary = document.getElementById("lesson-summary");
    setupEl.selectAll     = document.getElementById("select-all");
    setupEl.lessonList    = document.getElementById("lesson-list");
    setupEl.presets       = document.getElementById("count-presets");
    setupEl.countInput    = document.getElementById("count-input");
    setupEl.countHint     = document.getElementById("count-hint");
    setupEl.startBtn      = document.getElementById("start-btn");

    // 과목 선택 옵션 (데이터를 정상적으로 불러온 과목만)
    const loadedSubjects = SUBJECTS.filter(s => SUBJECT_DATA[s.id]);
    loadedSubjects.forEach(subject => {
        const option = document.createElement("option");
        option.value = subject.id;
        option.textContent = subject.label;
        setupEl.subjectSelect.appendChild(option);
    });

    // 기본값: 문항 수 10
    setupEl.countInput.value = "10";

    bindSetupEvents();

    if (loadedSubjects.length > 0) {
        selectSubject(loadedSubjects[0].id);
    } else {
        setupEl.lessonList.innerHTML =
            '<p class="p-4 text-sm text-center text-slate-400">불러온 과목이 없습니다.</p>';
        refreshSetupView();
    }
}

function bindSetupEvents() {
    // 과목 변경
    setupEl.subjectSelect.addEventListener("change", e => selectSubject(e.target.value));

    // 강 체크/해제 (목록 전체에서 이벤트를 한 번에 받음)
    setupEl.lessonList.addEventListener("change", e => {
        const checkbox = e.target.closest(".lesson-check");
        if (!checkbox) return;

        if (checkbox.checked) setupState.selectedLessons.add(checkbox.value);
        else setupState.selectedLessons.delete(checkbox.value);
        refreshSetupView();
    });

    // 모두 선택 / 모두 해제
    setupEl.selectAll.addEventListener("change", e => {
        const lessons = currentLessons();
        setupState.selectedLessons = e.target.checked
            ? new Set(lessons.map(l => l.key))
            : new Set();
        refreshSetupView();
    });

    // 문항 수 버튼 (10 / 20 / 30 / 50 / 전체)
    setupEl.presets.addEventListener("click", e => {
        const chip = e.target.closest(".chip");
        if (!chip) return;

        if (chip.dataset.count === "all") {
            setupState.countMode = "all";
        } else {
            setupState.countMode = "manual";
            setupEl.countInput.value = chip.dataset.count;
        }
        refreshSetupView();
    });

    // 문항 수 직접 입력
    setupEl.countInput.addEventListener("input", () => {
        setupState.countMode = "manual";
        refreshSetupView();
    });
    setupEl.countInput.addEventListener("keydown", e => {
        if (e.key === "Enter") handleStart();
    });

    setupEl.startBtn.addEventListener("click", handleStart);
}

/* ---------- 과목 / 강 ---------- */

function currentLessons() {
    const data = SUBJECT_DATA[setupState.subjectId];
    return data ? data.lessons : [];
}

/** 과목을 바꾸면 강 목록을 새로 그리고, 기본으로 모든 강을 선택해 둡니다. */
function selectSubject(subjectId) {
    setupState.subjectId = subjectId;
    setupEl.subjectSelect.value = subjectId;

    const lessons = currentLessons();
    setupState.selectedLessons = new Set(lessons.map(l => l.key));

    setupEl.lessonList.innerHTML = "";
    lessons.forEach(lesson => setupEl.lessonList.appendChild(createLessonRow(lesson)));

    refreshSetupView();
}

/** 강 한 줄:  [☐] 1강  강 제목  35문항 */
function createLessonRow(lesson) {
    const row = document.createElement("label");
    row.className = "lesson-row";
    row.dataset.lesson = lesson.key;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "lesson-check";
    checkbox.value = lesson.key;

    const num = document.createElement("span");
    num.className = "lesson-num";
    num.textContent = `${lesson.number}강`;

    const title = document.createElement("span");
    title.className = "lesson-title";
    title.textContent = lesson.title;

    const count = document.createElement("span");
    count.className = "lesson-count";
    count.textContent = `${lesson.count}문항`;

    row.append(checkbox, num, title, count);
    return row;
}

/** 선택한 강들에 등록된 문항 수의 합계 */
function selectedPoolSize() {
    return currentLessons()
        .filter(l => setupState.selectedLessons.has(l.key))
        .reduce((sum, l) => sum + l.count, 0);
}

/* ---------- 문항 수 ---------- */

/** "15" → 15, 비었거나 숫자가 아니거나 1 미만이면 0 */
function parseCount(raw) {
    return /^\d+$/.test(raw) ? parseInt(raw, 10) : 0;
}

function setHint(text, tone) {
    setupEl.countHint.textContent = text;
    setupEl.countHint.className = `mt-2 text-xs hint-${tone}`;
}

/* ---------- 화면 갱신 ---------- */

/** 현재 선택 상태(setupState)에 맞게 화면 전체를 다시 맞춥니다. */
function refreshSetupView() {
    const lessons = currentLessons();
    const selectedCount = setupState.selectedLessons.size;
    const pool = selectedPoolSize();

    // 강 줄: 체크 상태, 선택 강조
    setupEl.lessonList.querySelectorAll(".lesson-row").forEach(row => {
        const checked = setupState.selectedLessons.has(row.dataset.lesson);
        row.classList.toggle("is-selected", checked);
        row.querySelector(".lesson-check").checked = checked;
    });

    // 모두 선택: 전부 선택이면 체크, 일부만 선택이면 중간(-) 표시
    const hasLessons = lessons.length > 0;
    setupEl.selectAll.disabled = !hasLessons;
    setupEl.selectAll.checked = hasLessons && selectedCount === lessons.length;
    setupEl.selectAll.indeterminate = selectedCount > 0 && selectedCount < lessons.length;
    setupEl.lessonSummary.textContent = hasLessons ? `${selectedCount} / ${lessons.length}강 선택` : "";

    // "전체 문항"이면 입력칸을 선택 범위의 문항 수로 맞춤
    if (setupState.countMode === "all") {
        setupEl.countInput.value = pool > 0 ? String(pool) : "";
    }

    const count = parseCount(setupEl.countInput.value.trim());

    // 문항 수 버튼 강조
    setupEl.presets.querySelectorAll(".chip").forEach(chip => {
        const isAll = chip.dataset.count === "all";
        const active = isAll
            ? setupState.countMode === "all"
            : setupState.countMode === "manual" && count === Number(chip.dataset.count);
        chip.classList.toggle("is-active", active);
        chip.setAttribute("aria-pressed", String(active));
    });

    // 안내 문구
    if (pool === 0) {
        setHint("강을 하나 이상 선택해 주세요.", "error");
    } else if (count === 0) {
        setHint("문항 수를 1 이상의 숫자로 입력해 주세요.", "error");
    } else if (count > pool) {
        setHint(`선택한 범위에는 ${pool}문항이 등록되어 있어요. ${pool}문항까지만 출제되고 끝나요.`, "warning");
    } else if (setupState.countMode === "all") {
        setHint(`선택한 범위의 전체 ${pool}문항이 출제돼요.`, "normal");
    } else {
        setHint(`선택한 범위에 등록된 ${pool}문항 중 ${count}문항이 무작위로 출제돼요.`, "normal");
    }
}

/* ---------- 시작 ---------- */

function handleStart() {
    if (!setupState.subjectId) {
        alert("불러온 과목이 없습니다. 데이터 파일을 확인해주세요.");
        return;
    }
    if (setupState.selectedLessons.size === 0) {
        alert("강을 하나 이상 선택해주세요!");
        return;
    }

    const count = parseCount(setupEl.countInput.value.trim());
    if (count === 0) {
        alert("문항 수를 1 이상의 숫자로 입력해주세요!");
        setupEl.countInput.focus();
        return;
    }

    const questions = pickQuestions(setupState.subjectId, [...setupState.selectedLessons], count);
    if (questions.length === 0) {
        alert("해당 조건에 맞는 문제가 없습니다!");
        return;
    }

    startQuiz(questions);
}
