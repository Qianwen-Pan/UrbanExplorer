import React from "react";
import PlaceItem from "./PlaceItem";
import "./PlaceList.css";
import Card from "../../shared/components/UIElements/Card";

function PlaceList(props){
    if(props.items.length === 0){
        return (
            <Card className="place-list">
                <h2>No places found. Maybe create one?</h2>
                <button>Share Places</button>
            </Card>
        );
    }
    return (
        <ul className="place-list">
            {props.items.map(place => <PlaceItem 
            key={place.id}
            id={place.id}
            image={place.imgUrl}
            title={place.title}
            description={place.description}
            address={place.address}
            location={place.location}
            creator={place.creator}
            />)}
        </ul>
    );

}
export default PlaceList;