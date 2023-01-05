import React from "react"


function Card(props) {
    return (
        <section className="card--container">
            <div className="card-holder">
                <img className="card--image" src={props.imageUrl}></img>
                <div className="card--description">
                    <div className="card--country">
                        <p className="country">
                            <img className="icon" src="../images/map.png"></img>
                            {props.location.toUpperCase()}
                        </p>
                        <p className="googleMaps"><a href={props.googleMapsUrl}>View on Google Maps</a></p>
                    </div>
                    <h1 className="title">{props.title}</h1>
                    <h4 className="period">{`${props.startDate} - ${props.endDate}`}</h4>
                    <p className="description">{props.description}</p>
                </div>
            </div>
        </section>
    )
}

export default Card