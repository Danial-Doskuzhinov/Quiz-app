import React from 'react';

type QuizSelectionProps = {
    quizzes: { title: string ,icon:string}[];
    handleStartQuiz: (quizTitle: string) => void;
};

const QuizSelection: React.FC<QuizSelectionProps> = ({ quizzes, handleStartQuiz }) => {
 
    return (
        <div className='flex'>
            
            <h2 className='text-[65px] ml-[7rem] w-[470px] mr-[6rem] mt-[10rem]'>Welcome to the Frontend Quiz!</h2>
            <div className='flex-col mt-[6rem]'>

            {quizzes.map((quiz, index) => (
                <button key={index}  onClick={() => handleStartQuiz(quiz.title)}
                className='w-[450px] h-[85px] flex items-center font-bold  pl-[3rem] mb-2 rounded-lg  custom-cursor  text-[25px] bg-gray-700 hover:bg-purple-600'>
                    <img className='pr-[2rem]' src={quiz.icon} alt={`${quiz.title}`} />
                    {quiz.title}
                </button>
            ))}
            </div>

        </div>
    );
};

export default QuizSelection;
