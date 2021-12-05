import React from 'react'
import "./SingleCard.css"

export default function SingleCard({ card, handleChoice, flipped }) {

    const handleClick = () => {
        handleChoice(card)
    }
    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img className="front" src={card.src} alt="card's front"/>
                <img 
                className="back" 
                src="/img/Law of the Sea.jpg" 
                onClick={handleClick} 
                alt="card's back" />
            </div>
        </div>
    )
}
