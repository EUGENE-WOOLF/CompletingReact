import { useState } from "react";

export default function Player({ totalPlayer, target }) {
    const [playerScore, setPlayerScore] = useState(() => Array(totalPlayer).fill(0));

    function restartGame() {
        setPlayerScore(Array(totalPlayer).fill(0));
    }

    function increaseScore(i) {
        if (playerScore[i] >= target) return;
        setPlayerScore(prev =>
            prev.map((score, index) => (index === i ? score + 1 : score))
        );
    }

    const hasWinner = playerScore.some(score => score >= target);

    return (
        <div style={{ padding: "1rem", fontFamily: "Poppins, sans-serif" }}>
            {playerScore.map((score, i) => (
                <div key={i} style={{ marginBottom: "1rem" }}>
                    <strong>Player {i + 1}:</strong>{" "}
                    {score >= target ? (
                        <span style={{ color: "green", fontWeight: "bold" }}>🎉 Winner!</span>
                    ) : (
                        <span>{score}</span>
                    )}
                    <button
                        onClick={() => increaseScore(i)}
                        disabled={score >= target || hasWinner}
                        style={{
                            marginLeft: "1rem",
                            padding: "0.3rem 0.6rem",
                            borderRadius: "6px",
                            backgroundColor: score >= target ? "#ccc" : "#007bff",
                            color: "white",
                            border: "none",
                            cursor: score >= target || hasWinner ? "not-allowed" : "pointer"
                        }}
                    >
                        +1
                    </button>
                </div>
            ))}

            <button
                onClick={restartGame}
                style={{
                    padding: "0.5rem 1rem",
                    borderRadius: "6px",
                    backgroundColor: "#dc3545",
                    color: "white",
                    border: "none",
                    cursor: "pointer"
                }}
            >
                🔁 Reset Game
            </button>
        </div>
    );
}
