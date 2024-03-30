import React from 'react';

type QuizSelectionProps = {
    quizzes: { title: string }[];
    handleStartQuiz: (quizTitle: string) => void;
};

const QuizSelection: React.FC<QuizSelectionProps> = ({ quizzes, handleStartQuiz }) => {
    return (
        <div>
            <h2>Select a Quiz:</h2>
            {quizzes.map((quiz, index) => (
                <button key={index} onClick={() => handleStartQuiz(quiz.title)}>
                    {quiz.title}
                </button>
            ))}
        </div>
    );
};

export default QuizSelection;
