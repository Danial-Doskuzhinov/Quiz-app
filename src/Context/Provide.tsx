import { ReactNode, useState } from "react";
import Context from "./Context";
type Props ={
    children :ReactNode
}

function Provide({children}:Props ) {
    
   
   
    const initialContext = {
        
        currentIndex: 0,
        showResult: false,
        score: 0,
        
    };
    const quizContext = useState(initialContext);

    return <Context.Provider value={quizContext}>
        {children}
    </Context.Provider>
    
}

export default Provide;

