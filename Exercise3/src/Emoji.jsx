import { useState } from "react";

function EmojiMood() {
    const [emoji, setEmoji] = useState('😊')

function changeMood() {
    if(emoji == '😊')
        setEmoji('☹️')
    else if(emoji == '☹️')
        setEmoji('😊')
}
    return (
        <>
        <div>
           <h1>Current Mood: {emoji}</h1>
        </div>
        <button onClick={changeMood}style={{ fontSize: '25px'}}>Change Mood</button>
        
        </>
    )
}

export default EmojiMood