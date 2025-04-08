import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";


export default function Dictionary () {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
        

    let apiUrl ="https://api.shecodes.io/dictionary/v1/define?word={word}&key={key}";
    let apiKey =" 0eb691o00e3fb24a210b62tf2c42a9e3";
    axios.get(apiUrl).then(handleResponse);
    }


    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }


    return (
    <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} />
        </form>
        </div>
    );
}
