// import React from 'react'

// const Bot = () => {
//   return (
//     <div className="chat-button">

//     <button className='chat-button'>
//     💬
//     </button>
//     </div>
// )
// }

// export default Bot





import { useState } from "react";
import "../styles/Bot.scss";

function Chatbot() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Floating button */}
            <button
                className="chat-button"
                onClick={() => setOpen(!open)}
            >
                💬
            </button>

            {/* Chat window */}
            {open && (
                <div className="chat-box">

                    <div className="chat-header">
                        <h3>Shop Assistant</h3>

                        <button onClick={() => setOpen(false)}>
                            ✕
                        </button>
                    </div>

                    <div className="chat-messages">
                        <p>
                            Hello! 👋 How can I help you?
                        </p>
                    </div>

                    <div className="chat-input">
                        <input
                            type="text"
                            placeholder="Ask something..."
                        />

                        <button>Send</button>
                    </div>

                </div>
            )}
        </>
    );
}

export default Chatbot;