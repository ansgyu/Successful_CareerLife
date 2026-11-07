/* =========================================================
   utils.js : 여러 파일에서 함께 쓰는 작은 함수들
   ========================================================= */

/** 배열을 무작위로 섞은 "새 배열"을 돌려줍니다. (Fisher-Yates: 치우침 없는 섞기) */
function shuffle(array) {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

/** 화면에 HTML 로 넣을 문자열의 특수문자를 안전하게 바꿉니다. */
function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

/** "01강" → 1 */
function lessonNumber(lessonKey) {
    return parseInt(lessonKey, 10);
}

/** 화면 전환: 'setup-screen' | 'quiz-screen' | 'result-screen' 중 하나만 보이게 합니다. */
function showScreen(screenId) {
    ["setup-screen", "quiz-screen", "result-screen"].forEach(id => {
        document.getElementById(id).classList.toggle("hidden", id !== screenId);
    });
    window.scrollTo(0, 0);
}
