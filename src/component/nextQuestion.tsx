import type { next } from '../../type';
function nextQuestion({
    currentQuestionIndex,
    currentQuiz,
    setCurrentQuestionIndex,
    setSelectedOption,
    setShowResult,
}:next) {
    

const handleNextQuestion= () => {
    const nextIndex = currentQuestionIndex + 1;
    if (currentQuiz) {
        if (nextIndex < currentQuiz.questions.length) {
            setCurrentQuestionIndex(nextIndex);
            setSelectedOption('');
            setShowResult(false);
        } else {
            setShowResult(true);
        }}
    }
    return (
        <div>
            <p>Correct answer: {currentQuiz?.questions[currentQuestionIndex].answer}</p>
            <button onClick={handleNextQuestion}>Next Question</button>
        </div>
    );
;}

export default nextQuestion;
