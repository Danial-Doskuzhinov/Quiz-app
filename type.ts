export type QQuiz = {
    title: string;
    icon: string;
    questions: {
        question: string;
        options: string[];
        answer: string;
    }[];
} | null | undefined;
export type QuestionDisplayProps = {
    currentQuiz: QQuiz;
    currentQuestionIndex: number;
    selectedOption: string;
    setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
    showResult: boolean;
    setShowResult: React.Dispatch<React.SetStateAction<boolean>>;
    score: number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
};

  export type next = {
    currentQuiz: QQuiz;
    currentQuestionIndex: number;
    setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
    setShowResult: React.Dispatch<React.SetStateAction<boolean>>;
    setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
                    };