import Display from "../components/display/Display.jsx"
import quizData from "../data/quiz.js"
import Button from "../components/button/Button.jsx"
import { useState } from "react"
export default function () {
    const { quizIndex, setQuizIndex } = useState(0);
    const { answerLogs, setAnswerLogs } = useState([]);

    const handleClick = (clickedIndex) => {
        if (clickedIndex === quizData[quiziIndex].answerIndex) {
            setAnswerLogs((prev) => [...prev, true])//正誤判定
        } else {
            setAnswerLogs((prev) => [...prev, false])//正誤判定
        }
        setQuizIndex((prev) => prev + 1);//クイズを一つ進める
    }
    return (
        <>
            <Display>
                {`01.${quizData[quizIndex].question}`}
            </Display>
            {
                quizData[quizIndex].option.map((option, index) => {
                    return <Button key={`option-${index}`} onClick={() => handleClick(index)}>{option}</Button>
                })
            }



        </>
    )
}