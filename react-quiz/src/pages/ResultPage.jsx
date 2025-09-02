import { useLocation } from "react-router-dom";

export default function ResultPage() {
    const location = useLocation();
    const { maxQuizLen, correctNum } = location.state || {};

    return (
        <div>
            <h1>結果ページ</h1>
            {maxQuizLen != null && correctNum != null ? (
                <p>
                    正解数: {correctNum} / {maxQuizLen}
                </p>
            ) : (
                <p>データがありません</p>
            )}
        </div>
    );
}
