const fetchQuestionnaire = (): Promise<any[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(require("../questionnaire.json"));
    }, 1000); // Simulate network delay
  });
};

export default fetchQuestionnaire;
