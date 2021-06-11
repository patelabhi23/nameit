import React from 'react';
import './SearchBox.css';

const SeachBox = ({onInputChange}) =>
{
    return(
        <div className="search-container">
            <input onChange={(event) =>onInputChange(event.target.value)}
            placeholder="Type Keywords" className="search-input"></input>
        </div>  
    );
};

export default SeachBox;