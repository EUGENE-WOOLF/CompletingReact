import { useState } from "react";

export default function Toggler() {
    const [isHappy, setIsHappy] = useState(false);
    const toggleHappy = () => setIsHappy(!isHappy);

    return (
        <>
            <p className="emoji" onClick={toggleHappy}>
                {isHappy ? "😊" : "😭"}
            </p>
            <style jsx>{`
        .emoji {
          font-size: 4rem;    /* ← bigger emoji */
          cursor: pointer;
          margin: 1rem 0;
        }
      `}</style>
        </>
    );
}
