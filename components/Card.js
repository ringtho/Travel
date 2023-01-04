import React from "react"


function Card(props) {
    return (
        <section className="card--container">
            <div className="card-holder">
                <img className="card--image" src={props.item.imageUrl}></img>
                <div className="card--description">
                    <div className="card--country">
                        <p className="country">
                            <img className="icon" src="../images/map.png"></img>
                            {props.item.location.toUpperCase()}
                        </p>
                        <p className="googleMaps"><a href={props.item.googleMapsUrl}>View on Google Maps</a></p>
                    </div>
                    <h1 className="title">{props.item.title}</h1>
                    <h4 className="period">{`${props.item.startDate} - ${props.item.endDate}`}</h4>
                    <p className="description">{props.item.description}</p>
                </div>
            </div>
        </section>
    )
}

export default Card