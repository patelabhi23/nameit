import React from 'react';
import  '../Namecard/Namecard.css';

const nameCheapUrl= 'https://www.namecheap.com/domains/registration/results/?domain=';

const Namecard =({suggestedName}) =>
{
    return(
        <a href={`${nameCheapUrl}${suggestedName}`} className="card-link" target="_blank">
         <div className="result-name-card">
             <p className="result-name">{suggestedName}</p>
         </div>
         </a>);
};

export default Namecard;