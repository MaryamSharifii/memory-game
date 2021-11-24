import { useState } from 'react'
import './App.css'

const cardImages = [
    
    {"src": "/img/one.jpg"},
    {"src": "/img/two.jpg"},
    {"src": "/img/three.jpg"},
    {"src": "/img/four.jpg"},
    {"src": "/img/five.jpg"},
    {"src": "/img/six.jpg"},
    {"src": "/img/seven.jpg"},
    {"src": "/img/eight.jpg"}
]

function App() {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)

    //shuffle cards
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))

        setCards(shuffledCards)
        setTurns(0)
    }

    console.log(cards, turns)

    return (
        <div className= "App">
            <h1>Magic Match</h1>
            <button onClick ={shuffleCards}>New Game</button>
            
            <div className="card-grid">
                {cards.map(card =>  (
                    <div className="card" key={card.id}>
                        <div>
                           <img className="front" src={card.src} alt="card's front"/>
                           <img className="back" src="/img/Law of the Sea.jpg" alt="card's back" />
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default App