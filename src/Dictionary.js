import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";


export default function Dictionary (props) {
    let [keyword, setKeyword] = useState(props.defaultkeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        console.log(response.data)
        setResults(response.data);
    }

        function search() {
            let apiKey ="0eb691o00e3fb24a210b62tf2c42a9e3";
    let apiUrl =`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
        }

        function handleSubmit(event) {
            event.preventDefault();
            search();
        }
        
    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }
    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                    <h1>What word do you want to look up?</h1>
                <form onSubmit={handleSubmit}>
                    <input type="search" onChange={handleKeywordChange} />
                </form>
                <div className="hint">
                    suggested words: passion, flower, book, food...
                </div>
                </section>
                <Results results={results}/>
                </div>
            );
    } else {
        load();
        return "Loading";

    }
}
