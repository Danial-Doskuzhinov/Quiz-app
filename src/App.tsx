import { ThemeProvider } from './Context/ThemeContext';
import QuizHeader from './component/header';
import { BrowserRouter as Router } from 'react-router-dom';

const QuizApp = () => {

    return (
        <>
         <Router>
            <ThemeProvider>
            <QuizHeader />

            </ThemeProvider>
        </Router>
        </>
    );
};

export default QuizApp;
