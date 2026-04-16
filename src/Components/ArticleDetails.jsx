import { useLocation, useNavigate } from "react-router-dom";

export default function ArticleDetails() {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state) {
        return <h2>No article selected</h2>;
    }

    return (
        <div className="article-page">
            <h1>{state.title}</h1>
            <p><strong>Summary:</strong> {state.description}</p>
            <p>{state.content}</p>

            <button onClick={() => navigate("/")}>
                Back
            </button>
        </div>
    );
}