import React from 'react'
import "./SingleCard.css"

export default function SingleCard({ card }) {
    return (
        <div className="card">
            <div>
                <img className="front" src={card.src} alt="card's front"/>
                <img className="back" src="/img/Law of the Sea.jpg" alt="card's back" />
            </div>
        </div>
    )
}
