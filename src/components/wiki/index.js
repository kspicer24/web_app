import React from "react";
import "../../index.css";
import data from "./wikiData.json";
import WikiItem from "./WikiItem";

const Wiki = () => {
    return(
        <div className={`wikiBar`}>
            {data.map(d => <WikiItem data={d}/>)}
        </div>
    )
}

export default Wiki;