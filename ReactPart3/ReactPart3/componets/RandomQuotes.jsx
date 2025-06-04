import { useState, useEffect } from "react";

export default function RandomQuotes() {
    const [catFact, setCatFact] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchQuotes();
    }, []);

    const fetchQuotes = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://catfact.ninja/fact");
            const data = await response.json();
            setCatFact(data.fact);
        } catch (error) {
            setCatFact("Failed to load cat fact.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <p>{catFact}</p>
                    <button onClick={fetchQuotes}>Change</button>
                </>
            )}
        </div>
    );
}
