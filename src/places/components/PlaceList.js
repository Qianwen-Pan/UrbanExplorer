import React from "react";
import PlaceItem from "./PlaceItem";

function PlaceList(props){
    return (
        <ul>
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