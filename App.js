import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

function App() {
    const cards = data.map(
        item => 
            <Card 
            key={item.id}
            title={item.title}
            location={item.location}
            googleMapsUrl={item.googleMapsUrl}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
            imageUrl={item.imageUrl}
            />
        
            )
    return (
        <div className="container">
            <Navbar />
            {cards}
        </div>
    )
}

export default App