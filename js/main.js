/* =========================================================
   main.js : 프로그램 시작 지점
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    // 데이터 파일을 불러오지 못한 과목이 있으면 안내
    if (LOAD_ERRORS.length > 0) {
        alert(
            `다음 파일을 불러오지 못했습니다: ${LOAD_ERRORS.join(", ")}\n` +
            "index.html 기준 경로와 파일명이 맞는지, 파일 첫 줄의 변수명이 config.js 설정과 같은지 확인해주세요."
        );
    }

    initSetup();
    initQuiz();
});
