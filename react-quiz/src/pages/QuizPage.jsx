import Display from "../components/display/Display.jsx";
import quizData from "../data/quiz.js";
import Button from "../components/button/Button.jsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../const.js";

export default function Quiz() {
    const [quizIndex, setQuizIndex] = useState(0);
    const [answerLogs, setAnswerLogs] = useState([]);
    const navigate = useNavigate();
    const MAX_QUIZ_LEN = quizData.length;

    const handleClick = (clickedIndex) => {
        // 正誤判定を追加
        setAnswerLogs((prev) => [
            ...prev,
            clickedIndex === quizData[quizIndex].answerIndex
        ]);
        // クイズを一つ進める
        setQuizIndex((prev) => prev + 1);
    };

    useEffect(() => {
        // 全問回答したら結果画面に遷移
        if (answerLogs.length === MAX_QUIZ_LEN) {
            const correctNum = answerLogs.filter((answer) => answer).length;
            navigate(ROUTES.RESULT, {
                state: {
                    maxQuizLen: MAX_QUIZ_LEN,
                    correctNum
                }
            });
        }
    }, [answerLogs, navigate]);

    return (
        <>
            {quizIndex < MAX_QUIZ_LEN && (
                <>
                    <Display>
                        {`Q${quizIndex + 1}. ${quizData[quizIndex].question}`}
                    </Display>
                    {quizData[quizIndex].option.map((option, index) => (
                        <Button
                            key={`option-${index}`}
                            onClick={() => handleClick(index)}
                        >
                            {option}
                        </Button>
                    ))}
                </>
            )}
        </>
    );
}
