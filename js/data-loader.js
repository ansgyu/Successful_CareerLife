/* =========================================================
   data-loader.js : data 폴더의 문제 데이터를 읽어서 쓰기 좋게 정리합니다.

   결과물
   - SUBJECT_DATA[과목id] = {
         subject,                 // config.js 의 과목 설정
         questions: [...],        // 중복을 제거한 전체 문항
         lessons: [{ key:"01강", number:1, title:"...", count:35 }, ...]
     }
   - LOAD_ERRORS : 불러오지 못한 과목의 파일 경로 목록
   ========================================================= */

const SUBJECT_DATA = {};
const LOAD_ERRORS = [];

/** 같은 id 또는 같은 문장이 두 번 들어 있어도 한 번만 남깁니다. */
function removeDuplicateQuestions(list) {
    const seenIds = new Set();
    const seenTexts = new Set();
    const unique = [];

    list.forEach(q => {
        const text = String(q.question).trim();
        const hasId = q.id !== undefined && q.id !== null;

        if (hasId && seenIds.has(q.id)) return;
        if (seenTexts.has(text)) return;

        if (hasId) seenIds.add(q.id);
        seenTexts.add(text);
        unique.push(q);
    });

    return unique;
}

/** 과목 하나의 데이터를 정리합니다. */
function buildSubjectData(subject, rawList) {
    const questions = removeDuplicateQuestions(rawList);

    // 강별 문항 수 세기
    const counts = new Map();
    questions.forEach(q => counts.set(q.lesson, (counts.get(q.lesson) || 0) + 1));

    // 데이터에 실제로 있는 강만, 번호 순서대로 목록 만들기
    const lessons = [...counts.keys()]
        .sort((a, b) => lessonNumber(a) - lessonNumber(b))
        .map(key => {
            const number = lessonNumber(key);
            return {
                key,
                number,
                title: subject.lessonTitles[number - 1] || "",
                count: counts.get(key)
            };
        });

    return { subject, questions, lessons };
}

SUBJECTS.forEach(subject => {
    const rawData = subject.getData();
    const list = rawData && rawData[subject.dataKey];

    if (!Array.isArray(list)) {
        LOAD_ERRORS.push(subject.file);
        return;
    }
    SUBJECT_DATA[subject.id] = buildSubjectData(subject, list);
});
