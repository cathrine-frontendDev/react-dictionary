import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";


export default function Dictionary () {
    let [keyWord, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
        

    let apiUrl ="https://api.shecodes.io/dictionary/v1/define?word=${word}&key={apiKey}";
    let apiKey =" 0eb691o00e3fb24a210b62tf2c42a9e3";
    let word= keyWord;
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
        <Results results={results}/>
        </div>
    );
}
