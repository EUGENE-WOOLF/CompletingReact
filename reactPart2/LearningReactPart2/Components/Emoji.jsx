import { useState } from "react";
import { v4 as uuid } from 'uuid';

export default function Emoji() {
    const [emojis, setEmojis] = useState([{
        id: uuid(),
        emoji: '😊'
    }])

    const addEmoji = () => {
        setEmojis(
            (oldEmojiArray) => {
                return [
                    ...emojis, {
                        id: uuid(),
                        emoji: '❤️'
                    }]
            }
        )
    }



    const updateAllEmoji = () => {
        setEmojis((oldEmojiArray) => {
            return oldEmojiArray.map(e => {
                return { id: e.id, emoji: '💕' }
            })
        })
    }


    const deleteEmoji = (emojiID) => {
        setEmojis((oldEmojiArray) => {
            return oldEmojiArray.filter(e => e.id !== emojiID)
        })
    }

    //updating all and updating just one of them

    return (
        <>
            <div>
                {emojis.map(e => {
                    return <span onClick={() => {
                        deleteEmoji(e.id)
                    }} id={e.id}>{e.emoji}</span>
                })}
            </div>
            <div>
                <button onClick={addEmoji}>Add Emoji</button>
                <button onClick={updateAllEmoji}>Change all emoji</button>
            </div>
        </>
    )
}