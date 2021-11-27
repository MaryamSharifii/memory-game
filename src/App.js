import { useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard'

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
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)

    //shuffle cards
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))

        setCards(shuffledCards)
        setTurns(0)
    }

    // handle a choice
    const handleChoice  = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    return (
        <div className= "App">
            <h1>Magic Match</h1>
            <button onClick ={shuffleCards}>New Game</button>
            
            <div className="card-flex">
                {cards.map(card =>  (
                    <SingleCard 
                        key={card.id} 
                        card={card}
                        handleChoice={handleChoice}
                     />
                ))}
            </div>
        </div>
    );
}

export default App