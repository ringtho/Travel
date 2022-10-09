import React from "react"


function Card() {
    return (
        <main className="card--container">
            <img className="card--image" src="https://source.unsplash.com/WLxQvbMyfas"></img>
            <div className="card--description">
                <div className="card--country">
                    
                    <p className="country">
                        <img className="icon" src="../images/map.png"></img>
                        JAPAN
                    </p>
                    <p className="googleMaps"><a href="#">View on Google Maps</a></p>
                </div>
                <h1 className="location">Mount Fuji</h1>
                <h4 className="period">12 Jan, 2021 - 24 Jan, 2021</h4>
                <p className="description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters 
                    (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, 
                    for both Japanese and foreign tourists.</p>
            </div>
        </main>
    )
}

export default Card