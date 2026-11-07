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
    description: "교재의 핵심 개념 표의 빈칸 채우기 및 보기 박스 단어 분류를 통해 복습하세요",
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
  },
  "success_2": {
    title: "02강 생애 발달과 직업적 성공 (1)",
    description: "교재의 핵심 개념 표의 빈칸 채우기 및 보기 박스 단어 분류를 통해 복습하세요",
    tables: [
      {
        type: "box",
        caption: "1. 해비거스트(Havighurst)의 생애 발달 단계별 특징 및 발달 과업",
        headers: ["발달 단계", "해당 발달 특징 및 과업을 끌어다 넣으세요"],
        words: [
          "대뇌·감각기관 발달",
          "젖 떼기·걸음마·말하기",
          "애착 형성",
          "어휘력 급증 및 또래 놀이",
          "기본 생활 습관 형성",
          "학습 습관 형성",
          "도덕성의 기초 형성",
          "급격한 신체 성장 및 성적 성숙",
          "자아 정체감 형성하기",
          "진로 탐색 및 성인 준비",
          "직업 선택 및 취업",
          "배우자 선택과 결혼",
          "직업 수행 지식·기술 습득",
          "신체적 노화 시작 및 갱년기",
          "인생 철학 확립하기",
          "직업 안정 및 직업 전환",
          "건강 약화 대비 심신 단련",
          "체력 저하와 의존성 증가",
          "은퇴 적응하기",
          "배우자 사별 및 죽음 준비"
        ],
        rows: [
          {
            category: "영아기 (0~2세)",
            answers: ["대뇌·감각기관 발달", "젖 떼기·걸음마·말하기", "애착 형성"]
          },
          {
            category: "유아기 (2~6세)",
            answers: ["어휘력 급증 및 또래 놀이", "기본 생활 습관 형성"]
          },
          {
            category: "아동기 (6~12세)",
            answers: ["학습 습관 형성", "도덕성의 기초 형성"]
          },
          {
            category: "청소년기 (12~20세)",
            answers: ["급격한 신체 성장 및 성적 성숙", "자아 정체감 형성하기", "진로 탐색 및 성인 준비"]
          },
          {
            category: "성년기 (20~40세)",
            answers: ["직업 선택 및 취업", "배우자 선택과 결혼", "직업 수행 지식·기술 습득"]
          },
          {
            category: "중년기 (40~65세)",
            answers: ["신체적 노화 시작 및 갱년기", "인생 철학 확립하기", "직업 안정 및 직업 전환", "건강 약화 대비 심신 단련"]
          },
          {
            category: "노년기 (65세 이후)",
            answers: ["체력 저하와 의존성 증가", "은퇴 적응하기", "배우자 사별 및 죽음 준비"]
          }
        ]
      },
      {
        type: "box",
        caption: "2. 생애 발달 과정의 시기별 직업 생활 특징",
        headers: ["시기", "해당 시기의 직업 생활 특징을 끌어다 넣으세요"],
        words: [
          "학업 성취감과 유능감 확장",
          "자신에게 맞는 직업 선택",
          "자신만의 전문 영역 확장",
          "원만한 대인 관계와 정보 교류",
          "안정적인 직업 생활과 경제적 안정",
          "직장 생활 경력자로서 역할과 책임",
          "노후 대비 일과 취미 활동 탐색",
          "은퇴 준비 및 은퇴 후 생활 적응",
          "자아 존중감 유지 및 여가 생활"
        ],
        rows: [
          {
            category: "청소년기",
            answers: ["학업 성취감과 유능감 확장"]
          },
          {
            category: "성년기",
            answers: ["자신에게 맞는 직업 선택", "자신만의 전문 영역 확장", "원만한 대인 관계와 정보 교류"]
          },
          {
            category: "중년기",
            answers: ["안정적인 직업 생활과 경제적 안정", "직장 생활 경력자로서 역할과 책임", "노후 대비 일과 취미 활동 탐색"]
          },
          {
            category: "노년기",
            answers: ["은퇴 준비 및 은퇴 후 생활 적응", "자아 존중감 유지 및 여가 생활"]
          }
        ]
      }
    ]
  },
  "success_3": {
    title: "03강 생애 발달과 직업적 성공 (2)",
    description: "교재의 핵심 개념 표의 빈칸 채우기 및 보기 박스 단어 분류를 통해 복습하세요",
    tables: [
      {
        type: "box",
        caption: "1. 생애 발달 단계별 직업적 성공을 위한 요건",
        headers: ["발달 단계", "해당 시기에 요구되는 성공 요건을 끌어다 넣으세요"],
        words: [
          "직업적 성공의 의미 정립",
          "필요한 지식·기술·태도 준비",
          "어려운 상황에 대한 긍정적 인식",
          "업무 수행 시 창의성과 도전 정신 발휘",
          "업무 전문성 강화와 꾸준한 자기 개발",
          "직업 윤리와 책임 의식 함양",
          "경력을 바탕으로 한 지도력(리더십) 발휘",
          "다양한 경험을 바탕으로 한 위기 대처 능력",
          "지금까지 쌓은 기술에 대한 장인 정신과 소명 의식",
          "재취업 훈련 및 노인 교육 프로그램 참여",
          "건강한 인간관계 유지 및 여가 생활"
        ],
        rows: [
          {
            category: "청소년기",
            answers: ["직업적 성공의 의미 정립", "필요한 지식·기술·태도 준비", "어려운 상황에 대한 긍정적 인식"]
          },
          {
            category: "성년기",
            answers: ["업무 수행 시 창의성과 도전 정신 발휘", "업무 전문성 강화와 꾸준한 자기 개발", "직업 윤리와 책임 의식 함양"]
          },
          {
            category: "중년기",
            answers: ["경력을 바탕으로 한 지도력(리더십) 발휘", "다양한 경험을 바탕으로 한 위기 대처 능력", "지금까지 쌓은 기술에 대한 장인 정신과 소명 의식"]
          },
          {
            category: "노년기",
            answers: ["재취업 훈련 및 노인 교육 프로그램 참여", "건강한 인간관계 유지 및 여가 생활"]
          }
        ]
      }
    ]
  },
  "success_4": {
    title: "04강 기업의 종류와 형태별 특징",
    description: "교재의 핵심 개념 표의 빈칸 채우기 및 보기 박스 단어 분류를 통해 복습하세요",
    tables: [
      {
        type: "blank",
        caption: "1. 상법상 회사 기업의 형태별 특징",
        headers: ["회사 형태", "사원 구성 및 주요 특징"],
        rows: [
          {
            category: "<input class='blank-input' data-ans='합명회사|합명 회사'>",
            content: "2인 이상의 <input class='blank-input' data-ans='무한책임사원|무한 책임 사원'>만으로 조직되며, 채무에 대해 연대하여 무한 책임을 지는 대표적인 <input class='blank-input' data-ans='인적 공동 기업|인적공동기업'>임. 지분 양도 시 사원 전원의 동의가 필요함."
          },
          {
            category: "<input class='blank-input' data-ans='합자회사|합자 회사'>",
            content: "1인 이상의 무한 책임 사원과 1인 이상의 <input class='blank-input' data-ans='유한책임사원|유한 책임 사원'>으로 구성된 형태임. 무한 책임 사원은 업무 집행 권리와 의무를 갖고, 유한 책임 사원은 경영에 참여하지 않고 출자 한도 내 책임만 지며 이익 분배를 받음."
          },
          {
            category: "<input class='blank-input' data-ans='유한회사|유한 회사'>",
            content: "최소 1인 이상의 유한 책임 사원으로 구성되며, 회사의 중요한 의사 결정은 <input class='blank-input' data-ans='사원총회|사원 총회'>에서 하고 경영은 <input class='blank-input' data-ans='이사'>가 전담함. 1좌마다 1의결권을 행사함."
          },
          {
            category: "<input class='blank-input' data-ans='유한책임회사|유한 책임 회사'>",
            content: "1인 이상의 유한 책임 사원으로 구성되나, 사원 총회 소집 절차를 생략할 수 있어 벤처 기업에 유리함. 출자액과 무관하게 사원 1인이 <input class='blank-input' data-ans='1의결권|1표'>을 행사하며 업무 집행은 <input class='blank-input' data-ans='업무집행자|업무 집행자|업무 집행 사원'>이 담당함."
          },
          {
            category: "<input class='blank-input' data-ans='주식회사|주식 회사'>",
            content: "자본을 주식으로 소액 균등 분할 조달하며 주주는 출자 한도 내 유한 책임을 짐. <input class='blank-input' data-ans='자본의 증권화|자본 증권화'>로 대규모 자본 조달이 가능하며, 최고 의사 결정은 <input class='blank-input' data-ans='주주총회|주주 총회'>, 업무 집행 의사 결정은 <input class='blank-input' data-ans='이사회'>가 담당함."
          }
        ]
      },
      {
        type: "blank",
        caption: "2. 규모에 따른 기업의 분류",
        headers: ["규모 구분", "근거 법령 및 세부 기준"],
        rows: [
          {
            category: "<input class='blank-input' data-ans='대기업'>",
            content: "자산 총액 5조 원 이상인 <input class='blank-input' data-ans='공시대상기업집단|공시 대상 기업 집단'>과 자산 총액이 GDP의 0.5% 이상인 <input class='blank-input' data-ans='상호출자제한기업집단|상호 출자 제한 기업 집단'>을 의미함."
          },
          {
            category: "<input class='blank-input' data-ans='중견기업'>",
            content: "중소기업 범위를 벗어나고 <input class='blank-input' data-ans='상호출자제한기업집단|상호 출자 제한 기업 집단'>에 속하지 않는 기업으로, 업종 상관없이 자산 총액이 <input class='blank-input' data-ans='5000억|5,000억|5천억'>원 이상인 기업이 포함됨."
          },
          {
            category: "<input class='blank-input' data-ans='중소기업'>",
            content: "업종별 평균 매출액이 400억~1,800억 원 이하이고 자산 총액이 <input class='blank-input' data-ans='5000억|5,000억|5천억'>원 미만인 기준을 충족해야 함."
          }
        ]
      }
    ]
  },
  "success_5": {
    title: "05강 기업의 경영 활동",
    description: "교재의 핵심 개념 표의 빈칸 채우기 및 보기 박스 단어 분류를 통해 복습하세요",
    tables: [
      {
        type: "blank",
        caption: "1. 경영자의 분류 (소유 여부 및 계층)",
        headers: ["분류 기준", "경영자 유형 및 주요 특징"],
        rows: [
          {
            category: "소유 여부",
            content: "자본 출자 및 소유·경영을 겸하며 위험을 모두 부담하는 <input class='blank-input' data-ans='소유경영자|소유 경영자'>, 경영권 일부를 위임받고 급여를 받는 <input class='blank-input' data-ans='고용경영자|고용 경영자'>, 전문적 지식과 능력을 바탕으로 경영 활동을 전담하는 <input class='blank-input' data-ans='전문경영자|전문 경영자'>"
          },
          {
            category: "경영 계층",
            content: "기업의 전반적인 방향과 장기 계획을 책임지는 <input class='blank-input' data-ans='최고경영자|최고 경영자'>(대표이사, 사장 등), 중간에서 일선 업무를 지휘·조정하는 <input class='blank-input' data-ans='중간경영자|중간 경영자'>(부장, 과장 등), 현장 실무자를 직접 지도하는 <input class='blank-input' data-ans='일선경영자|일선 경영자|하위경영자'>(대리, 반장 등)"
          }
        ]
      },
      {
        type: "blank",
        caption: "2. 경영 관리 순환 과정 (단계별 개념)",
        headers: ["단계 순서", "관리 활동 설명"],
        rows: [
          {
            category: "1단계",
            content: "경영 목표를 수립하고 이를 달성하기 위한 전략과 구체적인 추진 절차를 결정하는 단계: <input class='blank-input' data-ans='계획|계획(Planning)|Planning'>"
          },
          {
            category: "2단계",
            content: "업무를 분류하고 권한과 책임을 확정하여 인적·물적 자원을 체계적으로 배분하는 단계: <input class='blank-input' data-ans='조직|조직(Organizing)|Organizing'>"
          },
          {
            category: "3단계",
            content: "리더십을 발휘하고 동기를 부여하며 구성원들이 목표를 향해 협력하도록 지도·감독하는 단계: <input class='blank-input' data-ans='지휘|지휘(Leading)|Leading'>"
          },
          {
            category: "4단계",
            content: "실제 경영 성과를 측정하여 계획과 비교·평가하고 피드백을 통해 개선 조치를 취하는 단계: <input class='blank-input' data-ans='통제|통제(Controlling)|Controlling'>"
          }
        ]
      },
      {
        type: "box",
        caption: "3. 부문별 기업의 주요 경영 활동 분류",
        headers: ["경영 활동 부문", "해당 부문에 속하는 세부 활동을 끌어다 넣으세요"],
        words: [
          "인력 채용 및 배치",
          "신입 사원 OJT 교육",
          "임금 및 복리 후생 관리",
          "노사 관계 및 협력",
          "공정 관리 및 설비 자동화",
          "재고 관리 및 불량률 감소",
          "시장 세분화(STP 전략)",
          "신제품 광고 및 판촉 촉진",
          "자금 조달 및 투자 결정",
          "주주 배당금 결정",
          "재무제표 작성 및 결산 보고"
        ],
        rows: [
          {
            category: "인적 자원 관리 활동",
            description: "인재의 확보, 개발, 보상, 유지 기능",
            answers: ["인력 채용 및 배치", "신입 사원 OJT 교육", "임금 및 복리 후생 관리", "노사 관계 및 협력"]
          },
          {
            category: "생산 관리 활동",
            description: "품질, 원가, 납기 최적화 및 공정 운영",
            answers: ["공정 관리 및 설비 자동화", "재고 관리 및 불량률 감소"]
          },
          {
            category: "마케팅 관리 활동",
            description: "고객 분석 및 4P(제품, 가격, 유통, 촉진) 믹스 실행",
            answers: ["시장 세분화(STP 전략)", "신제품 광고 및 판촉 촉진"]
          },
          {
            category: "재무 관리 활동",
            description: "기업 가치 극대화를 위한 자금의 조달과 운용",
            answers: ["자금 조달 및 투자 결정", "주주 배당금 결정"]
          },
          {
            category: "회계 정보 관리 활동",
            description: "이해관계자를 위한 거래 기록 및 재무 상태 보고",
            answers: ["재무제표 작성 및 결산 보고"]
          }
        ]
      }
    ]
  },
  "success_6": {
    title: "06강 제조업과 제품 생산 활동",
    description: "교재의 핵심 개념 표의 빈칸 채우기 및 보기 박스 단어 분류를 통해 복습하세요",
    tables: [
      {
        type: "blank",
        caption: "1. 제조업의 분류",
        headers: ["분류 기준 및 학자", "핵심 내용 및 특징"],
        rows: [
          {
            category: "클라크(Clark)의 산업 분류",
            content: "산업을 제1차, 제2차, 제3차 산업으로 구분함. 제조업은 원재료를 가공하여 유형(有形)의 재화를 생산하는 <input class='blank-input' data-ans='제2차 산업|제 2차 산업|2차 산업|제2차산업'>에 해당함."
          },
          {
            category: "호프만(Hoffmann)의 산업 분류",
            content: "산업을 생산재 산업과 소비재 산업으로 구분함. 개인 소비자의 최종 소비 목적 생산물은 <input class='blank-input' data-ans='소비재|소비재 제조업'>, 다른 재화를 만드는 데 필요한 중간 생산물 생산은 <input class='blank-input' data-ans='생산재|생산재 제조업'>에 해당함."
          },
          {
            category: "발달 단계별 분류",
            content: "가내 수공업 중심의 <input class='blank-input' data-ans='재래 공업|재래공업'> → 부피가 작고 노동 집약적인 섬유·가발 등의 <input class='blank-input' data-ans='경공업'> → 대규모 설비·자본 중심의 철강·석유화학 등의 <input class='blank-input' data-ans='중화학 공업|중화학공업'> → 연구 개발 비중이 높은 <input class='blank-input' data-ans='첨단 공업|첨단공업'> 순으로 발달함."
          }
        ]
      },
      {
        type: "blank",
        caption: "2. 제품 생산 방식",
        headers: ["구분 기준", "생산 방식별 핵심 특징 및 예시"],
        rows: [
          {
            category: "작업 공정: 개별 생산",
            content: "소비자의 요구에 따라 제품을 개별적으로 생산하며, 제품마다 가공 방법과 설비가 다름. 고가품 생산에 적합함. (예: <input class='blank-input' data-ans='선박|항공기|맞춤 의류|특수 기계'> 등)"
          },
          {
            category: "작업 공정: 로트(Lot) 생산",
            content: "개별 생산과 연속 생산의 중간 형태로, 같은 부품이나 제품을 1회 생산 분량인 <input class='blank-input' data-ans='로트|lot|Lot'> 단위로 모아서 생산함. (예: 가구, 도자기, 제화 등)"
          },
          {
            category: "작업 공정: 연속 생산",
            content: "표준 제품을 정해진 공정에 따라 대량으로 연속 생산하는 방식임. 조립 라인 방식과 연속 흐름 방식이 있음. (예: <input class='blank-input' data-ans='자동차|가전제품|시멘트|비료'> 등)"
          },
          {
            category: "작업 공정: 프로젝트 생산",
            content: "제한된 기간 내에 이루어지는 대규모 일회성 생산 방식으로 작업자 운용이 유연해야 함. (예: <input class='blank-input' data-ans='댐|교량|고속도로|대형 건물'> 등)"
          },
          {
            category: "시장 수요: 계획(시장) 생산",
            content: "시장의 수요를 예측하여 생산 계획 수립 후 대량 생산함. 예측 실패 시 재고 부담이 있으며 <input class='blank-input' data-ans='소품종 대량 생산|소품종 대량생산'>에 적합함."
          },
          {
            category: "시장 수요: 주문 생산",
            content: "소비자의 주문에 따라 생산하므로 재고 위험은 없으나 단가가 높음. <input class='blank-input' data-ans='다품종 소량 생산|다품종 소량생산'>에 적합함."
          }
        ]
      }
    ]
  },
  "success_7": {
    title: "07강 서비스업과 서비스 생산",
    description: "교재의 핵심 개념 표의 빈칸 채우기 및 보기 박스 단어 분류를 통해 복습하세요",
    tables: [
      {
        type: "blank",
        caption: "1. 서비스의 4대 특징",
        headers: ["특징", "세부 설명"],
        rows: [
          {
            category: "<input class='blank-input' data-ans='무형성'>",
            content: "형태가 없어 구매 전까지 생산 활동의 결과가 눈에 보이지 않음."
          },
          {
            category: "<input class='blank-input' data-ans='동시성|비분리성'>",
            content: "서비스 제공자에 의해 생산되는 서비스가 동시에 고객에 의해 소비되는 성격으로, 생산과 소비가 동시에 일어남."
          },
          {
            category: "<input class='blank-input' data-ans='이질성'>",
            content: "제공자의 숙련도, 고객, 시간, 장소 등에 따라 서비스의 내용이나 품질 수준이 달라지는 성격임."
          },
          {
            category: "<input class='blank-input' data-ans='소멸성'>",
            content: "제공이 끝나면 사라지며, 판매되지 않은 서비스는 재고로 보관하거나 저장할 수 없는 성격임."
          }
        ]
      },
      {
        type: "blank",
        caption: "2. 서비스의 유형 (공급 주체 및 수요 주체)",
        headers: ["분류 기준", "유형별 특징 및 사례"],
        rows: [
          {
            category: "공급 주체: 공공 서비스",
            content: "공공의 이익을 목적으로 국가, 지자체, 공기업 등이 공급함. (예: <input class='blank-input' data-ans='교육|교통|행정|경찰|소방'> 등)"
          },
          {
            category: "공급 주체: 민간 서비스",
            content: "이윤 창출을 목적으로 기업이나 민간단체가 공급함. (예: 도소매업, 금융업, 여가 산업 등)"
          },
          {
            category: "수요 주체: 소비자 서비스",
            content: "수요자가 일반 소비자이며 직접 제공됨. 소비자 가까이에 <input class='blank-input' data-ans='분산 입지|분산입지'>하는 경향이 있음. (예: 소매업, 음식점업, 숙박업 등)"
          },
          {
            category: "수요 주체: 생산자 서비스",
            content: "수요자가 생산자(기업)이며 다른 재화·서비스 생산에 투입됨. 교통·통신이 편리한 대도시에 <input class='blank-input' data-ans='집중 입지|집중|집적'>하는 경향이 있음. (예: <input class='blank-input' data-ans='법률|연구 개발|광고|회계|컨설팅'> 등)"
          }
        ]
      },
      {
        type: "blank",
        caption: "3. 서비스의 특성에 따른 생산 방식",
        headers: ["생산 방식", "주요 특징 및 대표 사례"],
        rows: [
          {
            category: "<input class='blank-input' data-ans='개별 생산 방식|개별 생산|개별생산방식'>",
            content: "소비자의 특성을 고려하여 소규모 개별 맞춤형으로 제공하는 방식으로, 특정 고객 관리 및 개별화된 서비스 제공에 적합함."
          },
          {
            category: "<input class='blank-input' data-ans='대량 생산 방식|대량 생산|대량생산방식'>",
            content: "대규모 고객에게 동질의 서비스를 동시에 제공할 수 있도록 체계화·표준화한 방식임. (예: <input class='blank-input' data-ans='패스트푸드점|프랜차이즈|대형 패스트푸드점'> 등)"
          }
        ]
      },
      {
        type: "box",
        caption: "4. 슈메너(Schmenner)의 서비스 프로세스 매트릭스",
        headers: ["서비스 유형", "해당하는 특성 및 업종을 끌어다 넣으세요"],
        words: [
          "상호작용 낮음 · 노동집중도 낮음",
          "상호작용 높음 · 노동집중도 낮음",
          "상호작용 낮음 · 노동집중도 높음",
          "상호작용 높음 · 노동집중도 높음",
          "항공 운송, 통신, 패스트푸드점",
          "병원, 여행사, 자동차 정비소",
          "도소매업, 교육, 금융, 공공 서비스",
          "의사, 변호사, 회계사, 건축가"
        ],
        rows: [
          {
            category: "서비스 공장 (Service Factory)",
            description: "자동화 및 표준화로 대량 생산, 공정 효율성 중시",
            answers: ["상호작용 낮음 · 노동집중도 낮음", "항공 운송, 통신, 패스트푸드점"]
          },
          {
            category: "서비스 점포 (Service Shop)",
            description: "높은 고객 맞춤화 제공, 설비 자본 투자 필요",
            answers: ["상호작용 높음 · 노동집중도 낮음", "병원, 여행사, 자동차 정비소"]
          },
          {
            category: "대량 서비스 (Mass Service)",
            description: "표준화된 산출물, 노동 집중도가 높음",
            answers: ["상호작용 낮음 · 노동집중도 높음", "도소매업, 교육, 금융, 공공 서비스"]
          },
          {
            category: "전문 서비스 (Professional Service)",
            description: "개인화된 맞춤 서비스와 고도의 전문성 요구",
            answers: ["상호작용 높음 · 노동집중도 높음", "의사, 변호사, 회계사, 건축가"]
          }
        ]
      }
    ]
  },
  "success_8": {
    title: "08강 직업 기초 능력의 종류와 향상",
    description: "교재의 핵심 개념 표의 빈칸 채우기 및 보기 박스 단어 분류를 통해 복습하세요",
    tables: [
      {
        type: "box",
        caption: "1. 직업기초능력의 3대 능력군 분류",
        headers: ["능력군", "해당 능력군에 속하는 직업기초능력(10개)을 끌어다 넣으세요"],
        words: [
          "의사소통 능력",
          "수리 능력",
          "문제 해결 능력",
          "정보 능력",
          "기술 능력",
          "자원 관리 능력",
          "조직 이해 능력",
          "대인 관계 능력",
          "자기 개발 능력",
          "직업 윤리"
        ],
        rows: [
          {
            category: "기초 능력군",
            description: "모든 직무 수행에 기초가 되는 기본 소양 역량 (2개)",
            answers: ["의사소통 능력", "수리 능력"]
          },
          {
            category: "업무 처리 능력군",
            description: "실제 현장 업무 처리에 필요한 전공 직업 능력 (5개)",
            answers: ["문제 해결 능력", "정보 능력", "기술 능력", "자원 관리 능력", "조직 이해 능력"]
          },
          {
            category: "직장 적응 능력군",
            description: "원만한 조직 생활 및 올바른 태도 형성에 필요한 능력 (3개)",
            answers: ["대인 관계 능력", "자기 개발 능력", "직업 윤리"]
          }
        ]
      },
      {
        type: "box",
        caption: "2. 직업기초능력별 주요 하위영역 구분",
        headers: ["직업기초능력", "해당 능력의 세부 하위영역을 끌어다 넣으세요"],
        words: [
          "문서 이해, 경청, 의사 표현",
          "기초 연산, 기초 통계, 도표 분석",
          "사고력, 문제 처리 능력",
          "컴퓨터 활용 능력, 정보 처리 능력",
          "시간 관리, 예산 관리, 물적·인적 자원 관리",
          "팀워크, 리더십, 갈등 관리, 협상",
          "자아 인식 능력, 자기 관리 능력, 경력 개발 능력",
          "근로 윤리, 공동체 윤리"
        ],
        rows: [
          {
            category: "의사소통 능력",
            description: "글과 말을 정확히 이해하고 표현하는 능력",
            answers: ["문서 이해, 경청, 의사 표현"]
          },
          {
            category: "수리 능력",
            description: "사칙연산, 통계, 도표를 업무에 적용하는 능력",
            answers: ["기초 연산, 기초 통계, 도표 분석"]
          },
          {
            category: "문제 해결 능력",
            description: "문제 발생 시 창의적·논리적으로 대안을 찾아 해결하는 능력",
            answers: ["사고력, 문제 처리 능력"]
          },
          {
            category: "정보 능력",
            description: "정보 수집·분석·관리 및 컴퓨터 활용 능력",
            answers: ["컴퓨터 활용 능력, 정보 처리 능력"]
          },
          {
            category: "자원 관리 능력",
            description: "시간, 자본, 시설, 인력을 체계적으로 계획·할당하는 능력",
            answers: ["시간 관리, 예산 관리, 물적·인적 자원 관리"]
          },
          {
            category: "대인 관계 능력",
            description: "동료 및 고객과 원만하게 소통하고 협력하는 능력",
            answers: ["팀워크, 리더십, 갈등 관리, 협상"]
          },
          {
            category: "자기 개발 능력",
            description: "스스로를 객관적으로 파악하고 경력을 관리하는 능력",
            answers: ["자아 인식 능력, 자기 관리 능력, 경력 개발 능력"]
          },
          {
            category: "직업 윤리",
            description: "원만한 직업 생활을 위한 태도, 매너, 올바른 직업관",
            answers: ["근로 윤리, 공동체 윤리"]
          }
        ]
      },
      {
        type: "box",
        caption: "3. 직업기초능력 향상 방법 분류",
        headers: ["직업기초능력", "해당 능력을 향상시키기 위한 실천 방법을 끌어다 넣으세요"],
        words: [
          "다양한 문서를 살펴보고 요약하며, 상대방 이야기에 공감하며 경청함",
          "평균·분산의 기본 개념을 익히고 업무 목적에 맞는 도표를 작성함",
          "문제의 인과 관계와 구조를 파악하고 창의적 대안을 도출함",
          "데이터베이스를 구축하고 정보를 체계적으로 가공·적시 활용함",
          "업무 매뉴얼을 파악하고 최신 기술 동향을 예측하여 현장에 적용함",
          "과업의 우선순위를 고려하여 시간 계획을 세우고 적재적소에 인력을 배치함",
          "경청과 지원으로 동료의 동기를 유발하고 협력·타협 전략을 활용함",
          "자신의 적성을 성찰하고 구체적인 경력 목표를 세워 인내심 있게 관리함",
          "근면한 태도로 시간을 준수하고 고객 가치를 우선시하는 봉사 의식을 가짐"
        ],
        rows: [
          {
            category: "의사소통 능력 향상",
            description: "언어적/비언어적 상호작용 개선",
            answers: ["다양한 문서를 살펴보고 요약하며, 상대방 이야기에 공감하며 경청함"]
          },
          {
            category: "수리 능력 향상",
            description: "수치 데이터 및 도표 활용",
            answers: ["평균·분산의 기본 개념을 익히고 업무 목적에 맞는 도표를 작성함"]
          },
          {
            category: "문제 해결 능력 향상",
            description: "논리적 분석 및 대안 실행",
            answers: ["문제의 인과 관계와 구조를 파악하고 창의적 대안을 도출함"]
          },
          {
            category: "정보 능력 향상",
            description: "데이터 수집·처리 및 DB 활용",
            answers: ["데이터베이스를 구축하고 정보를 체계적으로 가공·적시 활용함"]
          },
          {
            category: "기술 능력 향상",
            description: "도구·설비 매뉴얼 이해 및 기술 선택",
            answers: ["업무 매뉴얼을 파악하고 최신 기술 동향을 예측하여 현장에 적용함"]
          },
          {
            category: "자원 관리 능력 향상",
            description: "시간·예산·물품·인력 효율 배분",
            answers: ["과업의 우선순위를 고려하여 시간 계획을 세우고 적재적소에 인력을 배치함"]
          },
          {
            category: "대인 관계 능력 향상",
            description: "팀워크, 리더십 및 갈등 조정",
            answers: ["경청과 지원으로 동료의 동기를 유발하고 협력·타협 전략을 활용함"]
          },
          {
            category: "자기 개발 능력 향상",
            description: "자기 관리 및 지속적 경력 개발",
            answers: ["자신의 적성을 성찰하고 구체적인 경력 목표를 세워 인내심 있게 관리함"]
          },
          {
            category: "직업 윤리 향상",
            description: "시간 준수, 정직, 공동체 배려",
            answers: ["근면한 태도로 시간을 준수하고 고객 가치를 우선시하는 봉사 의식을 가짐"]
          }
        ]
      }
    ]
  },
  "success_9": {
    title: "09강 전공별 직무 수행 능력 탐색 (1)",
    description: "교재의 핵심 개념 표의 빈칸 채우기 및 보기 박스 단어 분류를 통해 복습하세요",
    tables: [
      {
        type: "blank",
        caption: "1. NCS 분류 체계 (4단계)",
        headers: ["단계 구분", "핵심 내용 및 분류 기준"],
        rows: [
          {
            category: "<input class='blank-input' data-ans='대분류'>",
            content: "총 24개 분야로 구성되며, 한국고용직업분류(KECO)의 중분류를 차용함."
          },
          {
            category: "<input class='blank-input' data-ans='중분류'>",
            content: "총 81개 분야로 직능 유형에 따라 '수행 활동'과 '수행 대상'으로 구분함."
          },
          {
            category: "<input class='blank-input' data-ans='소분류'>",
            content: "총 273개 분야로 구성되며 직종 구조 분석을 통해 최신성을 유지함."
          },
          {
            category: "<input class='blank-input' data-ans='세분류'>",
            content: "NCS 분류에서 세분류는 산업 현장의 <input class='blank-input' data-ans='직무'>를 의미하며 여러 개의 능력단위로 구성됨."
          }
        ]
      },
      {
        type: "blank",
        caption: "2. NCS 능력단위 구성 항목",
        headers: ["구성 항목", "상세 내용"],
        rows: [
          {
            category: "<input class='blank-input' data-ans='능력단위'>",
            content: "NCS 직무를 구성하는 기본 단위로, 직무에서 요구되는 고유한 직무 능력을 나타냄."
          },
          {
            category: "<input class='blank-input' data-ans='능력단위 요소|능력단위요소'>",
            content: "능력단위를 구성하는 핵심 하위 능력으로, 직업에 요구되는 <input class='blank-input' data-ans='지식·기술·태도|지식, 기술, 태도|지식 기술 태도'>로 표현됨."
          },
          {
            category: "<input class='blank-input' data-ans='수행 준거|수행준거'>",
            content: "능력단위 요소별 성취를 위해 도달해야 하는 구체적인 <input class='blank-input' data-ans='수행 기준'>을 제시한 것임."
          },
          {
            category: "기타 부속 정보",
            content: "적용 범위 및 작업 상황, 평가 지침, 해당 직무에서 요구되는 <input class='blank-input' data-ans='직업 기초 능력|직업기초능력'> 등이 포함됨."
          }
        ]
      },
      {
        type: "blank",
        caption: "3. 공정 채용 (블라인드 채용)",
        headers: ["구분", "핵심 내용"],
        rows: [
          {
            category: "개념",
            content: "채용 과정(서류·필기·면접)에서 편견이 개입될 수 있는 <input class='blank-input' data-ans='차별적인 평가 요소|차별적 평가 요소'>(출신지, 학력, 가족 관계, 외모 등)를 걷어내고 지원자의 <input class='blank-input' data-ans='직무 능력|직무 수행 능력'> 중심으로 평가하는 채용 방식"
          },
          {
            category: "사전 정보 제공",
            content: "기업은 채용 공고 시 해당 직무의 목적, 업무 내용, 필요 역량을 체계적으로 정리한 <input class='blank-input' data-ans='직무 기술서|직무기술서'>를 사전에 공개함."
          }
        ]
      }
    ]
  },
  "success_10": {
    title: "10강 전공별 직무 수행 능력 탐색 (2)",
    description: "교재의 핵심 개념 표의 빈칸 채우기 및 보기 박스 단어 분류를 통해 복습하세요",
    tables: [
      {
        type: "blank",
        caption: "1. 국민내일배움카드 제도",
        headers: ["구분", "핵심 세부 내용"],
        rows: [
          {
            category: "제도의 목적",
            content: "급격한 기술 발전에 대응하여 국민 스스로 직업 능력 개발 훈련을 실시할 수 있도록 국가에서 훈련비 등을 지원하는 카드 제도"
          },
          {
            category: "지원 한도",
            content: "기본 5년간 1인당 <input class='blank-input' data-ans='300~500만 원|300~500만원|300만~500만 원|300만~500만원'>까지 훈련비의 일부 또는 전액을 지원함."
          },
          {
            category: "지원 대상",
            content: "일자리를 구하는 구직자, 재직자, 이직 희망자 등 누구나 신청 가능함. (단, 실업자의 경우 고용센터에 <input class='blank-input' data-ans='구직 신청|구직신청'>을 완료해야 발급 가능)"
          },
          {
            category: "지원 제외 대상",
            content: "공무원, 사립학교 교직원, 만 75세 이상, 월 임금 300만 원 이상(만 45세 미만) 대기업 근로자, 고등학교 <input class='blank-input' data-ans='1~2학년|1, 2학년|1·2학년'>생 등은 지원 대상에서 제외됨."
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
