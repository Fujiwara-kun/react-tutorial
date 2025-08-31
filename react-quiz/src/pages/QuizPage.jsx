import Display from "../components/display/Display.jsx"
import quizData from "../data/quiz.js"
import Button from "../components/button/Button.jsx"
export default function () {
    const quizIndex = 0;
    return (
        <>
            <Display>
                {`01.${quizData[quizIndex].question}`}
            </Display>
            <Button>
                {quizData[quizIndex].option[0]}
            </Button>
            <Button>
                {quizData[quizIndex].option[1]}
            </Button>
            <Button>
                {quizData[quizIndex].option[2]}
            </Button>
            <Button>
                {quizData[quizIndex].option[3]}
            </Button>
        </>
    )
}