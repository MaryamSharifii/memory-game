import { useState } from 'react'
import './App.css'

const cardImages = [
    {"src": "/img/one.jpg"},
    {"src": "/img/two.jpg"},
    {"src": "/img/three.jpg"},
    {"src": "/img/four.jpg"},
    {"src": "/img/five.jpg"}
    // {"src": "/img/one.jpg"},
    // {"src": "/img/one.jpg"},
    // {"src": "/img/one.jpg"}
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
            
        </div>
    );
}

export default App