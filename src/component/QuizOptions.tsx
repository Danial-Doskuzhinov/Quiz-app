import React from 'react';

interface QuizOptionsProps {
    options: string[];
    answer: string;
    selectedOption: string;
    showResult: boolean;
    onSelectOption: (option: string) => void;
    setIsClick:(index:number)=>void;
    isClick:null|number
}

const QuizOptions: React.FC<QuizOptionsProps> = ({ options, answer, selectedOption, showResult, onSelectOption ,setIsClick,isClick   }) => {

    const handleClick = (index: number) => {
        if (isClick === null ) {
            setIsClick(index);
        }
        else if(isClick !== index){
            setIsClick(index);
        }
            
    };

    return (
        <>
            {options.map((option, index) => (
                <label
                    key={index}
                    className={`${isClick === index ? 'bg-purple-600' : ''} flex items-center hover:bg-purple-800 justify-between p-4 mb-2 rounded-lg cursor-pointer 
                    ${showResult ? (option === answer ? 'bg-green-500 text-white' : 'bg-red-500 text-white') : 'bg-gray-700 text-white'}`}
                    htmlFor={`option${index}`}
                    onClick={() => handleClick(index)}
                >
                    <input
                        type="radio"
                        id={`option${index}`}
                        name="quizOption"
                        value={option}
                        checked={selectedOption === option}
                        onChange={() => onSelectOption(option)}
                        className="hidden"
                    />
                    {option}
                </label>
            ))}
        </>
    );
};

export default QuizOptions;
