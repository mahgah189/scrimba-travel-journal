import React from "react";

function TravelEntry(props) {
    
    const styles = {
        borderBottom: props.travelEntry.id !== props.travelDataArrLength ? "1px solid #F5F5F5" : "none"
    };
    
    return (
        <div className="travel-entry" style={styles}>
            <img className="travel-img" src={props.travelEntry.imageUrl} alt={props.travelEntry.alt} />
            <div>
                <div className="location">
                    <i className="fa-solid fa-location-dot"></i>
                    <span>{props.travelEntry.location.toUpperCase()}</span>
                    <a href={props.travelEntry.googleMapsUrl}>View on Google Maps</a>
                </div>
                <p className="travel-title">{props.travelEntry.title}</p>
                <p className="travel-dates">{props.travelEntry.startDate} - {props.travelEntry.endDate}</p>
                <p className="travel-desc">{props.travelEntry.description}</p>
            </div>
        </div>
    )
}

export default TravelEntry;