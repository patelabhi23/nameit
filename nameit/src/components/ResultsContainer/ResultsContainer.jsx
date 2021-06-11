import React from 'react';
import Namecard from '../Namecard/Namecard';
import '../ResultsContainer/ResultsContainer.css';

const ResultsContainer = ({suggestedNames}) =>
{
    const suggestedNamesJsx= suggestedNames.map(suggestedName =>
        {
            return <Namecard key={suggestedName} suggestedName={suggestedName} />;
        });

    return(
        <div className="results-container">{suggestedNamesJsx}</div>
    );
}
 
export default ResultsContainer;