// [2027 수능특강] 과목별 전체 강 목록 (총 20강씩 구성)
const syllabus = {
  success: [
    { id: 1, title: "01강 일과 직업 및 직업 생활" },
    { id: 2, title: "02강 생애 발달과 직업적 성공 (1)" },
    { id: 3, title: "03강 생애 발달과 직업적 성공 (2)" },
    { id: 4, title: "04강 기업의 종류와 형태별 특징" },
    { id: 5, title: "05강 기업의 경영 활동" },
    { id: 6, title: "06강 제조업과 제품 생산 활동" },
    { id: 7, title: "07강 서비스업과 서비스 생산" },
    { id: 8, title: "08강 직업 기초 능력의 종류와 향상" },
    { id: 9, title: "09강 전공별 직무 수행 능력 탐색 (1)" },
    { id: 10, title: "10강 전공별 직무 수행 능력 탐색 (2)" },
    { id: 11, title: "11강 경력 개발과 평생 학습의 의미" },
    { id: 12, title: "12강 취업과 창업 및 기업가 정신 (1)" },
    { id: 13, title: "13강 취업과 창업 및 기업가 정신 (2)" },
    { id: 14, title: "14강 취업과 창업 및 기업가 정신 (3)" },
    { id: 15, title: "15강 근로관계와 법 (1)" },
    { id: 16, title: "16강 근로관계와 법 (2)" },
    { id: 17, title: "17강 고용 서비스와 사회 제도" },
    { id: 18, title: "18강 산업 안전과 재해 예방" },
    { id: 19, title: "19강 협력적인 노사 관계" },
    { id: 20, title: "20강 사회 문제와 직업 윤리 및 미래 사회와 직업 사회" }
  ],
  industry: [
    { id: 1, title: "01강 산업 구조와 공업의 발달" },
    { id: 2, title: "02강 경공업의 개요" },
    { id: 3, title: "03강 중화학 공업의 개요" },
    { id: 4, title: "04강 첨단 공업과 미래 사회" },
    { id: 5, title: "05강 제품과 제조 과정" },
    { id: 6, title: "06강 제품의 표준화" },
    { id: 7, title: "07강 제품 개발 및 생산 관리" },
    { id: 8, title: "08강 생산 혁신 활동과 생산 정보 시스템" },
    { id: 9, title: "09강 공장 자동화와 로봇의 활용" },
    { id: 10, title: "10강 구매·자재 관리" },
    { id: 11, title: "11강 제조 현장 및 품질 관리" },
    { id: 12, title: "12강 경영 지원 활동" },
    { id: 13, title: "13강 기술 경영 및 창업" },
    { id: 14, title: "14강 사고와 산업 안전" },
    { id: 15, title: "15강 산업 안전의 종류와 예방 대책 (1)" },
    { id: 16, title: "16강 산업 안전의 종류와 예방 대책 (2)" },
    { id: 17, title: "17강 공해와 환경 오염" },
    { id: 18, title: "18강 직업병과 자연환경 보전" },
    { id: 19, title: "19강 직업 세계" },
    { id: 20, title: "20강 진로 계획 수립과 실천" }
  ]
};

// ==========================================
// [강의 핵심 개념 데이터 저장소 (lectureDatabase)]
// 규칙: "과목코드_강번호" 형태로 저장합니다.
//  - 성공적인 직업생활: "success_1", "success_2", ...
//  - 공업 일반: "industry_1", "industry_2", ...
// ==========================================
const lectureDatabase = {
  // 성공적인 직업생활 1강
  "success_1": {
    title: "01강 일과 직업 및 직업 생활",
    description: "교재의 핵심 개념 표를 채우며 일과 직업의 의미, 직업 요건, 직업 가치관을 복습하세요.",
    tables: [
      {
        caption: "1. 일과 직업의 개념",
        headers: ["구분", "핵심 내용 및 특징"],
        rows: [
          {
            category: "일(Work)",
            content: "어떠한 목적을 달성하기 위한 육체적, 정신적 활동"
          },
          {
            category: "직업(Occupation)",
            content: "사회 구성원으로서 <input class='blank-input' data-ans='생계유지|생계 유지'>를 위하여 자신의 적성과 능력에 따라 일정 기간 <input class='blank-input' data-ans='지속적|지속적으로'> 종사하여 보수를 얻는 활동"
          },
          {
            category: "직(職)과 업(業)",
            content: "‘직(職)’은 직분을 맡아 행한다는 개인의 <input class='blank-input' data-ans='사회적 역할'>을 의미하고, ‘업(業)’은 생계 유지 및 자신의 능력을 발휘하기 위해 한 가지 일에 몰두함을 뜻함."
          }
        ]
      },
      {
        caption: "2. 직업의 성립 요건 (4대 요건)",
        headers: ["요건", "상세 설명"],
        rows: [
          {
            category: "계속성",
            content: "매일, 매주, 매월 등 주기적이고 <input class='blank-input' data-ans='계속적|계속적으로'> 행하는 일이어야 함."
          },
          {
            category: "경제성",
            content: "노동의 대가로 정당한 수입이나 <input class='blank-input' data-ans='보수|수입'>를 얻는 경제적 거래 관계가 성립해야 함."
          },
          {
            category: "사회성",
            content: "사회 공동체적인 맥락에서 의미 있는 활동이자 <input class='blank-input' data-ans='사회적 기여|사회 기여'>를 전제 조건으로 해야 함."
          },
          {
            category: "윤리성",
            content: "비윤리적이거나 <input class='blank-input' data-ans='반사회적|불법적'>인 활동을 통한 이윤 추구는 직업으로 인정되지 않음."
          }
        ]
      },
      {
        caption: "3. 직업 가치관의 유형",
        headers: ["구분", "특징 및 추구 가치"],
        rows: [
          {
            category: "내적 직업 가치관",
            content: "일 자체에서 보람, 즐거움, 성취감, <input class='blank-input' data-ans='자아실현|자아 실현'>, 능력 발휘 등을 중시하는 목적적 가치관"
          },
          {
            category: "외적 직업 가치관",
            content: "높은 보수(경제적 보상), 명예, 권력, <input class='blank-input' data-ans='직업 안정|직업안정'> 등 외부적 조건과 수단을 중시하는 수단적 가치관"
          }
        ]
      },
      {
        caption: "4. 직업 생활의 중요성",
        headers: ["차원", "주요 중요성 항목"],
        rows: [
          {
            category: "개인적 차원",
            content: "생계유지, 소속감 형성, 가치 실현, 개인의 사회적 위치 결정, <input class='blank-input' data-ans='자아실현|자아 실현'>"
          },
          {
            category: "사회적 차원",
            content: "구성원 간의 <input class='blank-input' data-ans='사회적 기능 분담|사회적 역할 분담'> 및 건강한 사회의 유지와 발전"
          }
        ]
      }
    ]
  }

  // 나중에 새로운 강을 추가할 때는 쉼표(,)를 찍고 아래에 바로 붙여넣기만 하면 됩니다!
  // 예시:
  // , "industry_1": { title: "01강 산업 구조와 공업의 발달", ... }
  // , "success_2": { title: "02강 생애 발달과 직업적 성공 (1)", ... }
};

// 현재 선택 상태 관리 변수
let currentSubject = "success";
let currentLectureId = 1;

// DOM 요소 참조
const selectorCard = document.querySelector(".selector-card");
const tabBtns = document.querySelectorAll(".tab-btn");
const lectureSelect = document.getElementById("lectureSelect");
const startBtn = document.getElementById("startBtn");
const learningArea = document.getElementById("learningArea");

// 초기 실행 함수
function init() {
  bindEvents();
  updateLectureDropdown();
  renderInitialState();
}

// 이벤트 등록
function bindEvents() {
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentSubject = btn.dataset.subject;
      currentLectureId = 1; // 과목 전환 시 1강으로 리셋
      updateLectureDropdown();
      renderInitialState();
    });
  });

  lectureSelect.addEventListener("change", (e) => {
    currentLectureId = parseInt(e.target.value, 10);
    renderInitialState();
  });

  if (startBtn) {
    startBtn.addEventListener("click", () => {
      startStudy();
    });
  }
}

// 강의 드롭다운 목록 업데이트
function updateLectureDropdown() {
  const lectures = syllabus[currentSubject];
  lectureSelect.innerHTML = "";

  lectures.forEach((lec) => {
    const option = document.createElement("option");
    option.value = lec.id;
    option.textContent = lec.title;
    lectureSelect.appendChild(option);
  });

  lectureSelect.value = currentLectureId;
}

// 시작하기 전 메인 대기 화면
function renderInitialState() {
  // 상단 과목 및 강 선택 영역 표시
  if (selectorCard) {
    selectorCard.style.display = "block";
  }

  const subjectName = currentSubject === "success" ? "성공적인 직업생활" : "공업 일반";
  const selectedLec = syllabus[currentSubject].find((lec) => lec.id === currentLectureId);
  const lectureTitle = selectedLec ? selectedLec.title : "";

  learningArea.innerHTML = `
    <div class="placeholder-view">
      <div style="font-size: 3rem; margin-bottom: 12px;">📖</div>
      <h3 style="font-size: 1.3rem; color: #1e293b; margin-bottom: 8px;">[${subjectName}] ${lectureTitle}</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 20px;">
        학습할 준비가 되셨다면 상단의 <strong>[학습 시작하기]</strong> 버튼을 눌러주세요!
      </p>
    </div>
  `;
}

// 학습 시작 처리: 선택 영역 숨김 및 공통 렌더링 호출
function startStudy() {
  if (selectorCard) {
    selectorCard.style.display = "none";
  }

  // 규칙 키 생성: "success_1", "industry_1" 등
  const lectureKey = `${currentSubject}_${currentLectureId}`;
  const targetData = lectureDatabase[lectureKey];

  if (targetData) {
    renderLecture(targetData);
  } else {
    renderPlaceholder();
  }
}

// 처음 메인(강 선택) 화면으로 돌아가기
function backToSelector() {
  renderInitialState();
}

// 공통 강의 테이블 및 문제 UI 렌더링 함수
function renderLecture(data) {
  let html = `
    <div class="content-header">
      <h2>${data.title}</h2>
      <p style="color: var(--text-muted); margin-top: 6px;">${data.description}</p>
    </div>
  `;

  data.tables.forEach((tbl) => {
    html += `
      <h3 style="margin: 18px 0 10px 0; font-size: 1.1rem; color: #1e293b;">${tbl.caption}</h3>
      <table class="concept-table">
        <thead>
          <tr>
            <th>${tbl.headers[0]}</th>
            <th>${tbl.headers[1]}</th>
          </tr>
        </thead>
        <tbody>
    `;

    tbl.rows.forEach((row) => {
      html += `
        <tr>
          <th>${row.category}</th>
          <td>${row.content}</td>
        </tr>
      `;
    });

    html += `
        </tbody>
      </table>
    `;
  });

  // 초기 상태: '정답 확인하기' 버튼만 노출
  html += `
    <div class="action-group">
      <div id="scoreDisplay" class="result-score"></div>
      <button class="btn btn-primary" id="checkBtn">정답 확인하기</button>
      <button class="btn btn-secondary" id="resetBtn" style="display: none;">다시 풀기</button>
      <button class="btn btn-secondary" id="backBtn" style="display: none;">돌아가기</button>
    </div>
  `;

  learningArea.innerHTML = html;

  // 버튼 이벤트 연결
  document.getElementById("checkBtn").addEventListener("click", checkAnswers);
  document.getElementById("resetBtn").addEventListener("click", resetBlanks);
  document.getElementById("backBtn").addEventListener("click", backToSelector);
}

// 정답 채점 로직
function checkAnswers() {
  const inputs = document.querySelectorAll(".blank-input");
  let correctCount = 0;

  // 기존 힌트 문구 제거
  document.querySelectorAll(".correct-answer-hint").forEach((el) => el.remove());

  inputs.forEach((input) => {
    const userVal = input.value.trim().replace(/\s+/g, "");
    const acceptedAnswers = input.dataset.ans.split("|").map((ans) => ans.trim().replace(/\s+/g, ""));
    const primaryAns = input.dataset.ans.split("|")[0];

    if (userVal && acceptedAnswers.includes(userVal)) {
      input.classList.remove("incorrect");
      input.classList.add("correct");
      correctCount++;
    } else {
      input.classList.remove("correct");
      input.classList.add("incorrect");

      // 오답 시 힌트 표시
      const hint = document.createElement("span");
      hint.className = "correct-answer-hint";
      hint.textContent = `(정답: ${primaryAns})`;
      input.insertAdjacentElement("afterend", hint);
    }
  });

  // 점수 결과 출력
  const scoreDisplay = document.getElementById("scoreDisplay");
  scoreDisplay.innerHTML = `총 <span style="color: var(--primary);">${inputs.length}</span>개 중 <span style="color: ${correctCount === inputs.length ? 'var(--correct)' : 'var(--incorrect)'};">${correctCount}</span>개 정답!`;

  // 정답 확인 후 버튼 전환
  const checkBtn = document.getElementById("checkBtn");
  const resetBtn = document.getElementById("resetBtn");
  const backBtn = document.getElementById("backBtn");

  if (checkBtn) checkBtn.style.display = "none";
  if (resetBtn) resetBtn.style.display = "inline-block";
  if (backBtn) backBtn.style.display = "inline-block";
}

// 빈칸 초기화 로직 (다시 풀기)
function resetBlanks() {
  const inputs = document.querySelectorAll(".blank-input");
  inputs.forEach((input) => {
    input.value = "";
    input.classList.remove("correct", "incorrect");
  });

  document.querySelectorAll(".correct-answer-hint").forEach((el) => el.remove());

  const scoreDisplay = document.getElementById("scoreDisplay");
  if (scoreDisplay) {
    scoreDisplay.textContent = "";
  }

  // 다시 풀기 시 버튼 원복
  const checkBtn = document.getElementById("checkBtn");
  const resetBtn = document.getElementById("resetBtn");
  const backBtn = document.getElementById("backBtn");

  if (checkBtn) checkBtn.style.display = "inline-block";
  if (resetBtn) resetBtn.style.display = "none";
  if (backBtn) backBtn.style.display = "none";
}

// 미구현 강의 플레이스홀더 화면
function renderPlaceholder() {
  const selectedLec = syllabus[currentSubject].find((lec) => lec.id === currentLectureId);

  learningArea.innerHTML = `
    <div class="placeholder-view">
      <h3>${selectedLec ? selectedLec.title : ""}</h3>
      <p style="margin-top: 10px;">해당 강의의 빈칸 학습 데이터는 현재 준비 중입니다.</p>
      <p style="font-size: 0.9rem; color: #94a3b8; margin-top: 6px;">
        상단 탭에서 <strong>[성공적인 직업생활]</strong>을 선택하고 <strong>[01강]</strong>을 선택해 학습을 체험해 보세요.
      </p>
      <div style="margin-top: 20px;">
        <button class="btn btn-secondary" id="placeholderBackBtn">돌아가기</button>
      </div>
    </div>
  `;

  document.getElementById("placeholderBackBtn").addEventListener("click", backToSelector);
}

// 문서 로드 완료 시 초기화 실행
document.addEventListener("DOMContentLoaded", init);
