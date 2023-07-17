import React from "react";
import ReactDOM from "react-dom";

import "./Modal.css";

function ModalOverlay(props){
    const content = (
        <div className={`modal ${props.className}`} style={props.style}>
            <header className={`modal__header ${props.headerClass}`}>
                <h2>{props.header}</h2>
            </header>

        </div>
    );
    return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
}

function Modal(){

}
export default Modal;
