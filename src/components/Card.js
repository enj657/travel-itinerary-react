import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-img-container">
                <img className="card-img" src={require(`../images/${props.item.img}`)} alt="here"/>
            </div>
            <div className="card-info">
                <div className="card-location-info">
                    <i className="location-pin fa-solid fa-location-dot"></i>
                    <span className="location">{props.item.location}</span>
                    <a className="maps-link" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <span className="card-title">{props.item.title}</span>
                <span className="card-date">{props.item.startDate} - {props.item.endDate}</span>
                <p className="card-description">{props.item.description}</p>
            </div>
        </div>
    )
}