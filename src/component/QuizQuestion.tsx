import React from 'react';

interface QuizQuestionProps {
    question: string;
    currentQuestionIndex: number;
    totalQuestions: number;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ question, currentQuestionIndex, totalQuestions }) => {
    const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

    return (
        <div className="mb-4">
            <p className="text-xl">{`Question ${currentQuestionIndex + 1} of ${totalQuestions}`}</p>
            <p className="text-lg mt-2">{question}</p>
            <div className="w-full bg-gray-700 rounded-full h-2.5 mt-4">
                <div
                    className="bg-purple-600 h-2.5 rounded-full"
                    style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export default QuizQuestion;
