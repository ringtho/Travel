import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

function App() {
    const cards = data.map(
        item => 
            <Card 
            key={item.id}
            {...item}
            />)
    return (
        <div className="container">
            <Navbar />
            {cards}
        </div>
    )
}

export default App