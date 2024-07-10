import React from 'react';
import QuizOptions from './QuizOptions';
import QuizQuestion from './QuizQuestion';
import type { QuestionDisplayProps } from '../../type';

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
    currentQuiz,
    currentQuestionIndex,
    selectedOption,
    setSelectedOption,
    showResult,
    setShowResult,
    score,
    setScore,
    setCurrentQuestionIndex,
    setIsClick,
    isClick
}) => {
    const handleAnswerSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const currentQuestion = currentQuiz?.questions[currentQuestionIndex];
        if (selectedOption === currentQuestion?.answer) {
            setScore(score + 1);
        }
        setShowResult(true);
        setIsClick(null)
    };

    const handleNextQuestion = () => {
        const nextIndex = currentQuestionIndex + 1;
        if (currentQuiz) {
            if (nextIndex < currentQuiz.questions.length) {
                setCurrentQuestionIndex(nextIndex);
                setSelectedOption('');
                setShowResult(false);
                setIsClick(null)
                
            } else {
                setShowResult(true);
            }
        }
    };

    if (!currentQuiz) return null;

    const currentQuestion = currentQuiz.questions[currentQuestionIndex];

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">{currentQuiz.title}</h2>
                <form onSubmit={handleAnswerSubmit}>
                    <QuizQuestion
                        question={currentQuestion.question}
                        currentQuestionIndex={currentQuestionIndex}
                        totalQuestions={currentQuiz.questions.length}
                    />
                    <QuizOptions
                        options={currentQuestion.options}
                        answer={currentQuestion.answer}
                        selectedOption={selectedOption}
                        showResult={showResult}
                        onSelectOption={setSelectedOption}
                        setIsClick={setIsClick}
                        isClick={isClick}
                    />
                    {!showResult ? 
                        <button type="submit" className="w-full p-4 bg-purple-600 rounded-lg text-white font-bold">
                            Submit answer
                        </button>
                     : 
                      <>  <button onClick={handleNextQuestion} className="w-full mt-4 p-4 bg-purple-600 rounded-lg text-white font-bold">
                      Next Question
                  </button></>
                    }
                </form>
                <p className="mt-4 text-xl">Score: {score}</p>
            </div>
        </div>
    );
};

export default QuestionDisplay;
