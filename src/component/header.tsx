import  { useState } from 'react';
import quizzesData from '../../data.json';
import QuizSelection from './QuizSelection';
import QuestionDisplay from './QuestionDisplay';
import DarkMode from './DarkMode';

type Quiz = {
    title: string;
    icon: string;
    questions: {
        question: string;
        options: string[];
        answer: string;
    }[];
} | null | undefined;

const QuizApp = () => {
    const [currentQuiz, setCurrentQuiz] = useState<Quiz>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [isClick, setIsClick] = useState<number | null>(null);

    const handleStartQuiz = (quizTitle: string) => {
        const quiz = quizzesData.quizzes.find((quiz) => quiz.title === quizTitle);
        if (quiz) {
            setCurrentQuiz(quiz);
            setCurrentQuestionIndex(0);
            setSelectedOption('');
            setShowResult(false);
            setScore(0);
        }
    };
    return (
        <div className='mt-[4rem]'>
            
          <DarkMode/>
           {!currentQuiz?.title?<> <QuizSelection quizzes={quizzesData.quizzes} handleStartQuiz={handleStartQuiz} /></>:<>
          <></>
          <QuestionDisplay
                currentQuiz={currentQuiz}
                currentQuestionIndex={currentQuestionIndex}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                showResult={showResult}
                setShowResult={setShowResult}
                score={score}
                setScore={setScore}
                setCurrentQuestionIndex={setCurrentQuestionIndex}
                setIsClick={setIsClick}
                isClick={isClick}
            />
           </>}          
        </div>
    );
};

export default QuizApp;
