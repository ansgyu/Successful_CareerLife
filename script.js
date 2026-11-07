// ==========================================
// [2027 수능특강] 과목별 전체 강 목록 (각 20강)
// ==========================================
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
//
// [작성 규칙]
// 1. type 생략 또는 type: "blank"
//    -> 기존 [빈칸 채우기] 방식 (<input class='blank-input' data-ans='...'>)
//
// 2. type: "box"
//    -> [보기 박스형 드래그&분류] 방식
//       - words: 보기 박스에 제시될 단어 배열 (자동으로 섞여서 표시됨)
//       - rows: 각 분류(카테고리) 및 해당 카테고리에 속해야 할 정답 단어 배열(answers)
// ==========================================
const lectureDatabase = {
  "success_1": {
    title: "01강 일과 직업 및 직업 생활",
    description: "교재의 핵심 개념 표의 빈칸 채우기 및 보기 박스 단어 분류를 통해 복습하세요.",
    tables: [
      {
        type: "blank",
        caption: "1. 직업의 요건",
        headers: ["구분", "내용"],
        rows: [
          {
            category: "<input class='blank-input' data-ans='계속성'>",
            content: "주기적, 계속적으로 행해지는 것"
          },
          {
            category: "<input class='blank-input' data-ans='윤리성'>",
            content: "비윤리적인 영리 행위나 반사회적인 활동을 통한 경제적인 이윤 추구는 직업으로 인정되지 않음."
          },
          {
            category: "<input class='blank-input' data-ans='경제성'>",
            content: "경제적인 거래 관계가 성립하는 활동을 수행해야 함."
          },
          {
            category: "<input class='blank-input' data-ans='사회성'>",
            content: "사회 공동체적인 맥락에서 의미 있는 활동"
          }
        ]
      },
      {
        type: "blank",
        caption: "2. 9대 직업 가치",
        headers: ["가치 요인", "설명"],
        rows: [
          {
            category: "<input class='blank-input' data-ans='자기 개발|자기개발'>",
            content: "직업을 통해 지식, 기술, 능력 등을 발전시키며 성장해 나가는 것을 중시함."
          },
          {
            category: "<input class='blank-input' data-ans='변화 지향|변화지향'>",
            content: "업무가 고정되어 있지 않고 변화 가능한 것을 중시함."
          },
          {
            category: "<input class='blank-input' data-ans='성취'>",
            content: "자신이 세운 목표를 실현하기 위해 계획한 일에 관심을 가지고, 자신의 능력을 발휘함으로써 목표를 달성해 나가는 것을 중시함."
          },
          {
            category: "<input class='blank-input' data-ans='사회적 인정|사회적인정'>",
            content: "다른 사람들과 사회로부터 일의 가치를 인정받는 것을 중시함."
          },
          {
            category: "<input class='blank-input' data-ans='경제적보상|경제적 보상'>",
            content: "일에 대한 정당한 대가로서의 보상을 중시함."
          },
          {
            category: "<input class='blank-input' data-ans='사회공헌|사회적공헌|사회적 공헌|사회 공헌'>",
            content: "일을 통해 다른 사람이나 사회에 도움이 되는 것을 중시함."
          },
          {
            category: "<input class='blank-input' data-ans='직업안정|직업 안정'>",
            content: "직업을 유지하면서 오랫동안 안정적으로 일할 수 있는지를 중시함."
          },
          {
            category: "<input class='blank-input' data-ans='자율|자율성'>",
            content: "자율적으로 업무를 수행해 나가는 것을 중시함."
          },
          {
            category: "<input class='blank-input' data-ans='일과 삶의 균형|일과 삶의균형|일과삶의 균형|일과삶의균형'>",
            content: "일뿐만 아니라 자신의 삶에서도 만족할 수 있도록 읽과 삶의 적절한 균형을 중시함."
          },
        ]
      },
      {
        type: "box",
        caption: "3. 직업 가치관의 유형",
        headers: ["분류", "<보기>에서 알맞은 단어를 드래그(또는 클릭)"],
        words: ["경제적 보상", "창의성 발휘", "흥미", "사회적 인정", "적성", "직업 안정", "사회 공헌"],
        rows: [
          {
            category: "왜재적 직업 가치",
            answers: ["경제적 보상", "직업 안정", "사회적 인정"]
          },
          {
            category: "내재적 직업 가치",
            answers: ["흥미", "적성", "창의성 발휘", "사회 공헌"]
          }
        ]
      },
      {
        type: "blank",
        caption: "4. 유연 근로 시간제",
        headers: ["분류", "설명"],
        rows: [
          {
            category: "2주 단위 탄력근로제",
            content: "<input class='blank-input' data-ans='취업 규칙|취업규칙'>에 따라 특정 주에는 법정근로시간을 넘겨 일할 수 있지만, 어떤 주든 <input class='blank-input' data-ans='48'>시간을 넘길 수 없음."            
          },
          {
            category: "3개월 단위 탄력근로제",
            content: "<input class='blank-input' data-ans='근로자 대표|근로자대표'>와 <input class='blank-input' data-ans='서면 합의|서면합의'>하면 3개월까지 평균해서 법정근로시간을 맞출 수 있음. 특정 주는 최대 <input class='blank-input' data-ans='52'>시간, 특정 날은 최대 <input class='blank-input' data-ans='12'>시간까지 일할 수 있음."
          },
          {
            category: "3개월 초과 6개월 이내 탄력근로제",
            content: "<input class='blank-input' data-ans='근로자 대표|근로자대표'>와 <input class='blank-input' data-ans='서면 합의|서면합의'>하면 기간 동안 평균적으로 법정근로시간을 지키면서 특정 주에는 최대 <input class='blank-input' data-ans='52'>시간, 특정 날에는 최대 <input class='blank-input' data-ans='12'>시간까지 일할 수 있음."
          },
          {
            category: "선택적 근로시간제",
            content: "<input class='blank-input' data-ans='취업 규칙|취업규칙'>에 따라 근로자가 출퇴근 시간을 스스로 정할 수 있는 경우에 적용함. <input class='blank-input' data-ans='근로자 대표|근로자대표'>와 <input class='blank-input' data-ans='서면 합의|서면합의'>를 통해 합의함. 일반적으로 <input class='blank-input' data-ans='1'>개월 이내로 정산 기간을 정하지만, 신상품이나 신기술 연구 개발 업무는 <input class='blank-input' data-ans='3'>개월까지 가능함. 이 기간에는 1주 평균 근로시간이 법정 기준을 넘지 않아야 함."
          },
          {
            category: "임금 보전과 적용 제외",
            content: "3개월 이내의 탄력적 근로시간제는 임금 보전 방안을 강구해야 함. 3개월을 초과하는 탄력적 근로시간제는 <input class='blank-input' data-ans='고용노동부장관|고용노동부 장관|노동부 장관|노동부장관'>에게 임금 보전 방안을 신고해야 함. 단, 서면 합의하여 마련한 경우 의무 없음. 15세~18세 미만 근로자는 탄력적 근로시간제와 선택적 근로시간제가 모두 적용되지 않지만, 임신 중인 여성 근로자는 <input class='blank-input' data-ans='선택적 근로시간제|선택적근로시간제|선택적근로제|선택적 근로제'>는 적용됨."
          }
        ]
      }
    ]
  }
};

// ==========================================
// 상태 관리 변수
// ==========================================
let currentSubject = "success";
let currentLectureId = 1;
let selectedWordItem = null; // 클릭 기반 선택용

// DOM 요소 참조
const selectorCard = document.querySelector(".selector-card");
const tabBtns = document.querySelectorAll(".tab-btn");
const lectureSelect = document.getElementById("lectureSelect");
const startBtn = document.getElementById("startBtn");
const learningArea = document.getElementById("learningArea");

// 초기 실행 함수
function init() {
  injectBoxStyles(); // 보기 박스형 동적 스타일 주입
  bindEvents();
  updateLectureDropdown();
  renderInitialState();
}

// 보기 박스 및 드래그 앤 드롭 전용 스타일 자동 추가
function injectBoxStyles() {
  if (document.getElementById("box-drag-styles")) return;
  const style = document.createElement("style");
  style.id = "box-drag-styles";
  style.textContent = `
    .word-bank-container {
      background: #f1f5f9;
      border: 2px dashed #94a3b8;
      border-radius: 8px;
      padding: 14px;
      margin-bottom: 14px;
    }
    .word-bank-title {
      font-size: 0.85rem;
      font-weight: bold;
      color: #475569;
      margin-bottom: 8px;
    }
    .word-bank {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      min-height: 42px;
      align-items: center;
    }
    .drag-chip {
      background: #ffffff;
      color: #1e293b;
      border: 1px solid #cbd5e1;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 600;
      cursor: grab;
      user-select: none;
      display: inline-flex;
      align-items: center;
      transition: all 0.2s;
      box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    }
    .drag-chip:active {
      cursor: grabbing;
    }
    .drag-chip.selected {
      background: #eff6ff;
      border-color: #2563eb;
      color: #2563eb;
      box-shadow: 0 0 0 2px rgba(37,99,235,0.25);
    }
    .drag-chip.correct {
      background: #dcfce7 !important;
      border-color: #16a34a !important;
      color: #16a34a !important;
    }
    .drag-chip.incorrect {
      background: #fee2e2 !important;
      border-color: #dc2626 !important;
      color: #dc2626 !important;
    }
    .drop-zone {
      min-height: 48px;
      background: #fafafa;
      border: 1.5px dashed #cbd5e1;
      border-radius: 6px;
      padding: 6px;
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      align-items: center;
      transition: background 0.2s, border-color 0.2s;
    }
    .drop-zone.drag-over {
      background: #eff6ff;
      border-color: #2563eb;
    }
    .missing-answer-chip {
      background: #fef2f2;
      border: 1px dashed #ef4444;
      color: #b91c1c;
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
    }
  `;
  document.head.appendChild(style);
}

// 이벤트 등록
function bindEvents() {
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentSubject = btn.dataset.subject;
      currentLectureId = 1;
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

// 학습 시작 처리
function startStudy() {
  if (selectorCard) {
    selectorCard.style.display = "none";
  }

  const lectureKey = `${currentSubject}_${currentLectureId}`;
  const targetData = lectureDatabase[lectureKey];

  if (targetData) {
    renderLecture(targetData);
  } else {
    renderPlaceholder();
  }
}

// 메인 화면으로 돌아가기
function backToSelector() {
  renderInitialState();
}

// 공통 강의 렌더링 함수 (빈칸형 + 보기 박스형 자동 지원)
function renderLecture(data) {
  let html = `
    <div class="content-header">
      <h2>${data.title}</h2>
      <p style="color: var(--text-muted); margin-top: 6px;">${data.description}</p>
    </div>
  `;

  data.tables.forEach((tbl, tblIdx) => {
    const isBoxType = tbl.type === "box";

    html += `
      <h3 style="margin: 22px 0 10px 0; font-size: 1.1rem; color: #1e293b;">${tbl.caption}</h3>
    `;

    // 보기 박스형인 경우: 상단에 보기 단어 저장소(Word Bank) 렌더링
    if (isBoxType && tbl.words) {
      // 보기 단어 섞기 (랜덤 정렬)
      const shuffledWords = [...tbl.words].sort(() => Math.random() - 0.5);

      html += `
        <div class="word-bank-container">
          <div class="word-bank-title">📌 [보기 박스] 아래 단어를 끌어다 넣거나, 단어를 누른 후 원하는 칸을 누르세요.</div>
          <div class="word-bank" id="bank_${tblIdx}">
      `;

      shuffledWords.forEach((w, wIdx) => {
        const chipId = `chip_${tblIdx}_${wIdx}`;
        html += `
          <div class="drag-chip" id="${chipId}" draggable="true" data-word="${w}">
            ${w}
          </div>
        `;
      });

      html += `
          </div>
        </div>
      `;
    }

    // 표 렌더링
    html += `
      <table class="concept-table">
        <thead>
          <tr>
            <th>${tbl.headers[0]}</th>
            <th>${tbl.headers[1]}</th>
          </tr>
        </thead>
        <tbody>
    `;

    tbl.rows.forEach((row, rowIdx) => {
      html += `
        <tr>
          <th>
            ${row.category}
            ${row.description ? `<div style="font-size: 0.8rem; color: var(--text-muted); font-weight: normal; margin-top: 4px;">${row.description}</div>` : ""}
          </th>
          <td>
      `;

      if (isBoxType) {
        // 보기 박스형: 드래그 앤 드롭 존
        const answersStr = encodeURIComponent(JSON.stringify(row.answers || []));
        html += `
          <div class="drop-zone" id="zone_${tblIdx}_${rowIdx}" data-table="${tblIdx}" data-answers="${answersStr}"></div>
        `;
      } else {
        // 일반 빈칸형
        html += row.content;
      }

      html += `
          </td>
        </tr>
      `;
    });

    html += `
        </tbody>
      </table>
    `;
  });

  // 하단 버튼 액션 그룹
  html += `
    <div class="action-group">
      <div id="scoreDisplay" class="result-score"></div>
      <button class="btn btn-primary" id="checkBtn">정답 확인하기</button>
      <button class="btn btn-secondary" id="resetBtn" style="display: none;">다시 풀기</button>
      <button class="btn btn-secondary" id="backBtn" style="display: none;">돌아가기</button>
    </div>
  `;

  learningArea.innerHTML = html;

  // 이벤트 연결
  attachDragAndDropEvents();
  document.getElementById("checkBtn").addEventListener("click", checkAnswers);
  document.getElementById("resetBtn").addEventListener("click", () => renderLecture(data));
  document.getElementById("backBtn").addEventListener("click", backToSelector);
}

// 드래그 앤 드롭 및 클릭 선택 이벤트 연결
function attachDragAndDropEvents() {
  const chips = document.querySelectorAll(".drag-chip");
  const zones = document.querySelectorAll(".drop-zone, .word-bank");

  // 드래그 아이템 이벤트
  chips.forEach((chip) => {
    chip.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", chip.id);
      chip.classList.add("dragging");
    });

    chip.addEventListener("dragend", () => {
      chip.classList.remove("dragging");
    });

    // 모바일 및 편의를 위한 클릭-선택 방식 지원
    chip.addEventListener("click", (e) => {
      e.stopPropagation();
      if (selectedWordItem === chip) {
        chip.classList.remove("selected");
        selectedWordItem = null;
      } else {
        if (selectedWordItem) selectedWordItem.classList.remove("selected");
        selectedWordItem = chip;
        chip.classList.add("selected");
      }
    });
  });

  // 드롭 존 이벤트
  zones.forEach((zone) => {
    zone.addEventListener("dragover", (e) => {
      e.preventDefault();
      zone.classList.add("drag-over");
    });

    zone.addEventListener("dragleave", () => {
      zone.classList.remove("drag-over");
    });

    zone.addEventListener("drop", (e) => {
      e.preventDefault();
      zone.classList.remove("drag-over");
      const chipId = e.dataTransfer.getData("text/plain");
      const chip = document.getElementById(chipId);
      if (chip) {
        zone.appendChild(chip);
      }
    });

    // 클릭하여 이동 지원
    zone.addEventListener("click", () => {
      if (selectedWordItem) {
        zone.appendChild(selectedWordItem);
        selectedWordItem.classList.remove("selected");
        selectedWordItem = null;
      }
    });
  });
}

// 정답 채점 로직 (빈칸형 + 박스형 통합 채점)
function checkAnswers() {
  let totalCount = 0;
  let correctCount = 0;

  // 1. 기존 힌트 문구 및 누락 표시 제거
  document.querySelectorAll(".correct-answer-hint, .missing-answer-chip").forEach((el) => el.remove());

  // 2. 빈칸형 채점
  const blankInputs = document.querySelectorAll(".blank-input");
  blankInputs.forEach((input) => {
    totalCount++;
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
      const hint = document.createElement("span");
      hint.className = "correct-answer-hint";
      hint.textContent = `(정답: ${primaryAns})`;
      input.insertAdjacentElement("afterend", hint);
    }
  });

  // 3. 보기 박스형 채점
  const dropZones = document.querySelectorAll(".drop-zone");
  dropZones.forEach((zone) => {
    const rawAnswers = JSON.parse(decodeURIComponent(zone.dataset.answers || "[]"));
    const acceptedSet = new Set(rawAnswers.map((w) => w.trim().replace(/\s+/g, "")));
    const placedChips = zone.querySelectorAll(".drag-chip");
    const placedSet = new Set();

    placedChips.forEach((chip) => {
      const word = chip.dataset.word.trim().replace(/\s+/g, "");
      placedSet.add(word);

      if (acceptedSet.has(word)) {
        chip.classList.remove("incorrect");
        chip.classList.add("correct");
        correctCount++;
      } else {
        chip.classList.remove("correct");
        chip.classList.add("incorrect");
      }
    });

    // 해당 카테고리의 총 정답 개수 반영
    totalCount += rawAnswers.length;

    // 빠뜨린 정답 단어가 있으면 시각적으로 안내
    rawAnswers.forEach((ans) => {
      const normalizedAns = ans.trim().replace(/\s+/g, "");
      if (!placedSet.has(normalizedAns)) {
        const missingEl = document.createElement("span");
        missingEl.className = "missing-answer-chip";
        missingEl.textContent = `+ 누락: ${ans}`;
        zone.appendChild(missingEl);
      }
    });
  });

  // 점수 출력
  const scoreDisplay = document.getElementById("scoreDisplay");
  scoreDisplay.innerHTML = `총 <span style="color: var(--primary);">${totalCount}</span>개 요소 중 <span style="color: ${correctCount === totalCount ? 'var(--correct)' : 'var(--incorrect)'};">${correctCount}</span>개 정답!`;

  // 버튼 상태 변경: 정답 확인 숨김 -> 다시 풀기 & 돌아가기 노출
  const checkBtn = document.getElementById("checkBtn");
  const resetBtn = document.getElementById("resetBtn");
  const backBtn = document.getElementById("backBtn");

  if (checkBtn) checkBtn.style.display = "none";
  if (resetBtn) resetBtn.style.display = "inline-block";
  if (backBtn) backBtn.style.display = "inline-block";
}

// 미구현 강의 안내 화면
function renderPlaceholder() {
  const selectedLec = syllabus[currentSubject].find((lec) => lec.id === currentLectureId);

  learningArea.innerHTML = `
    <div class="placeholder-view">
      <h3>${selectedLec ? selectedLec.title : ""}</h3>
      <p style="margin-top: 10px;">해당 강의의 학습 데이터는 현재 준비 중입니다.</p>
      <p style="font-size: 0.9rem; color: #94a3b8; margin-top: 6px;">
        상단 탭에서 <strong>[성공적인 직업생활]</strong>을 선택하고 <strong>[01강]</strong>을 선택해 학습을 체험해 보세요.
      </p>
      <div style="margin-top: 20px;">
        <button class="btn btn-secondary" onclick="backToSelector()">강 선택으로 돌아가기</button>
      </div>
    </div>
  `;
}

// 문서 로드 완료 시 초기화 실행
document.addEventListener("DOMContentLoaded", init);
