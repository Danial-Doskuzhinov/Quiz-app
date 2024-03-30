import React from 'react';
import type { QuestionDisplayProps } from '../../type';
import HandleNextQuestion  from "../component/nextQuestion";
const QuestionDisplay= ({
    currentQuiz,
    currentQuestionIndex,
    selectedOption,
    setSelectedOption,
    showResult,
    setShowResult,
    score,
    setScore,
    setCurrentQuestionIndex,
}:QuestionDisplayProps) => {
    const handleAnswerSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const currentQuestion = currentQuiz?.questions[currentQuestionIndex];
        if (selectedOption === currentQuestion?.answer) {
            setScore(score + 1);
        }
        setShowResult(true);
    };



    const renderQuizOptions = () => {
        const currentQuestion = currentQuiz?.questions[currentQuestionIndex];
        return currentQuestion?.options.map((option:string, index:number) => (
            <div key={index}>
                <input
                    type="radio"
                    id={`option${index}`}
                    name="quizOption"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => setSelectedOption(option)}
            />
                <label htmlFor={`option${index}`}>{option}</label>
            </div>
        ));
    };

    return (
        <div>
            {currentQuiz && (
                <div>
                    <h2>{currentQuiz.title}</h2>
                    {!showResult ? (
                        <form onSubmit={handleAnswerSubmit}>
                            <p>{`Question ${currentQuiz.questions[currentQuestionIndex + 1].question}`}</p>
                            {renderQuizOptions()}
                            <button type="submit">Submit</button>
                        </form>
                    ) : (
                        <>
                        
                       <HandleNextQuestion  currentQuestionIndex={currentQuestionIndex}
                       currentQuiz={currentQuiz}
                       setCurrentQuestionIndex={setCurrentQuestionIndex}
                       setSelectedOption={setSelectedOption}
                       setShowResult={setShowResult}/>
                       </>
                    )}
                    <p>Score: {score}</p>
                </div>
            )}
        </div>
    );
};

export default QuestionDisplay;
