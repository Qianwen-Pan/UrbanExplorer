import React from "react";
import Card from "../../shared/components/UIElements/Card";

function PlaceItem(props){
    return (
        <li>
            <Card>
                <div>
                    <image src={props.image} alt={props.title} />
                </div>
                <div>
                    <h2>{props.title}</h2>
                    <h3>{props.address}</h3>
                    <p>{props.description}</p>
                </div>
                <div>
                    <button>VIEW ON MAP</button>
                    <button>EDIT</button>
                    <button>DELETE</button>
                </div>
            </Card>
        </li>
    );

}
export default PlaceItem;