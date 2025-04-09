import React from "react";

export default function Meaning(props) {
    console.log(props.meaning);
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definations.map(function(defination, index)
            {
                return (
                    <div key={index}>
                        <p>
                            {defination.defination}
                            <br />
                            <em>{defination.example}</em>
                        </p>
                    </div>
                );
            })}
        
        </div>
    )
}