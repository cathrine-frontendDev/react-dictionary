import React from "react";
import "./Phonetic.css";

export default function Phonetic (props) {
    if (props.phonetic) {
    return (
        <div className="Phonetic">
            <strong>Phonetic: </strong>
            {props.phonetic}
        </div>
    );
} else {
    return null;
}
}