import React from "react";

export default function Synonyms(props) {
    if (props.synonyms)  {

    return (
        <div>
            <ul className="Synonyms">
            <strong>synonyms:</strong>
            {props.synonyms.map(function(synonym, index){
                return <li key={index}>{synonym},</li>;
            })}
            <ul/>
        </div>
    );
    } else {
        return null;
    }