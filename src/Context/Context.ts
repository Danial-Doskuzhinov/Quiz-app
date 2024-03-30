//Context.ts
import { Dispatch, SetStateAction, createContext } from "react";

type ContextType ={
    currentIndex: number,
    showResult: boolean,
    score: number,
}
type QuizContext = [ContextType , Dispatch<SetStateAction<ContextType>> ]

const Context = createContext<QuizContext>([{
    
    currentIndex: 0,
    showResult: false,
    score: 0,
},()=>{}]
)

export default Context;

