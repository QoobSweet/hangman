import React, { useEffect, useState } from 'react';
import HangManImage_1 from '../images/hangman_1.png';
import HangManImage_2 from '../images/hangman_2.png';
import HangManImage_3 from '../images/hangman_3.png';
import HangManImage_4 from '../images/hangman_4.png'
import HangManImage_5 from '../images/hangman_5.png'
import HangManImage_6 from '../images/hangman_6.png'
import HangManImage_7 from '../images/hangman_7.png'
import HangManImage_8 from '../images/hangman_8.png'
import HangManImage_9 from '../images/hangman_9.png'

//object or array that contains all the images
const manParts = [
    HangManImage_1,
    HangManImage_2,
    HangManImage_3,
    HangManImage_4,
    HangManImage_5,
    HangManImage_6,
    HangManImage_7,
    HangManImage_8,
    HangManImage_9
]



const GalloDisplay = (props) => {
    const rootName = 'GalloDisplay';

    const [dispImage, setDispImage] = useState(null)


    const testFunction = (event) => {
        console.log(event)
        console.log(event.target.attributes.testID)
    }


    useEffect(() => {
        const failCount = props.failCount;
        

        setDispImage(manParts[failCount]);
    }, [props])



    return ( 
        <div className = { rootName } >
            <img 
                src = { dispImage }
                alt = "HangmanImage"
                onMouseDown = { testFunction }

                testID = "sampleID" 
            />
        </div>
    )

}

export default GalloDisplay;