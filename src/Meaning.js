import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            <p className="definition">
                {props.meaning.definition}
                <br />
                <em className="example">{props.meaning.example}</em>
                <Synonyms synonyms={props.meaning.synonyms} />
            </p>
        </div>
    );
}