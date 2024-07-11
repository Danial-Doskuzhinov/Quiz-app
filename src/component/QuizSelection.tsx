import React from 'react';
import { Html, Css, Js, Accessibility } from '../assets/index';

type QuizSelectionProps = {
    quizzes: { title: string, icon: string }[];
    handleStartQuiz: (quizTitle: string) => void;
};

const QuizSelection: React.FC<QuizSelectionProps> = ({ quizzes, handleStartQuiz }) => {
    const logo = [
        { id: 0, icon: Html, name: 'Html' },
        { id: 1, icon: Css, name: 'Css' },
        { id: 2, icon: Js, name: 'Js' },
        { id: 3, icon: Accessibility , name: 'Accessibility' }
    ];

    const getIconComponent = (iconName: string) => {
        const logoItem = logo.find(logo => logo.name === iconName);
        return logoItem ? logoItem.icon :'';
    };

    return (
        <div className='flex'>
            <h2 className='text-[65px] ml-[7rem] w-[470px] mr-[6rem] mt-[10rem]'>Welcome to the Frontend Quiz!
</h2>
<br />            <p className='text-gray-900'>better turn dark mode</p>

            <div className='flex-col mt-[6rem]'>
                {quizzes.map((quiz, index) => (
                    <button key={index} onClick={() => handleStartQuiz(quiz.title)}
                        className='w-[450px] h-[85px] flex items-center font-bold pl-[3rem] mb-2 rounded-lg custom-cursor text-[25px] bg-gray-700 hover:bg-purple-600'>
                        <div className='pr-[2rem]'>
                            <img src={getIconComponent(quiz.icon)} alt="" />
                        </div>
                        {quiz.title}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuizSelection;
