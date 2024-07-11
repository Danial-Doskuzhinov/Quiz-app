import { ThemeProvider } from './Context/ThemeContext';
import QuizHeader from './component/header';
//
const QuizApp = () => {

    return (
        <>
            <ThemeProvider>
            <QuizHeader />
            </ThemeProvider>
        </>
    );
};

export default QuizApp;
