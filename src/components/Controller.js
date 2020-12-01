import React, { useState } from 'react';
import GalloDisplay from './galloDisplay.js';
import LetterSelector from './letterSelector.js';

const Controller = () => {
    const rootName = 'Controller';

    const [failCount, setFailCount] = useState(0);


    return ( 
        <div className = { rootName } >
            <GalloDisplay
                /* 
                declare props to be passed down here in html syntax  
                '{}' allow for passing javascript variables 
                */
                failCount = {failCount}

            />
            <LetterSelector
            />
        </div>
    )
}

export default Controller;