import React, { useEffect, useState } from 'react';
import './galloDisplay.css';
import HangManImage_0 from '../images/hangman_0.png';
import HangManImage_1 from '../images/hangman_1.png';
import HangManImage_2 from '../images/hangman_2.png';
import HangManImage_3 from '../images/hangman_3.png'
import HangManImage_4 from '../images/hangman_4.png'
import HangManImage_5 from '../images/hangman_5.png'
import HangManImage_6 from '../images/hangman_6.png'
import HangManImage_7 from '../images/hangman_7.png'
import HangManImage_8 from '../images/hangman_8.png'

//object or array that contains all the images
const manParts = [
    HangManImage_0,
    HangManImage_1,
    HangManImage_2,
    HangManImage_3,
    HangManImage_4,
    HangManImage_5,
    HangManImage_6,
    HangManImage_7,
    HangManImage_8
]



/**
 * 
 * @constant failCount : Option Passed down from Controller
 * @param {*} props 
 */
const GalloDisplay = (props) => {
    const rootName = 'GalloDisplay';
    const maxFails = 8;

    const [dispImage, setDispImage] = useState(null);

    // Create a function, getGuessesRemaining, that will return the value of the guesses remaining upon invokation. 
    const getGuessesRemaining = () => {
        return maxFails - props.failCount;
    };

    //activated only when props are updated/changed
    // React hook -- has 2 parameters: function that is callecd and dependentcy 
    useEffect( () => {
        //test if game is over or not; if not, proceed
            
        //call set-State Hook to set dispImage to new image
        //then immediately call a Component Update

        // if guesses remaining is greater than 0,execute setDispImage()
       
        if (!props.isGameOver) {
            if(maxFails - props.failCount >= 0) {
                setDispImage(manParts[props.failCount]);    
            } else {
                props.setIsGameOver(true)    
            }   
        };
    }, [props, props.failCount])
    





    return ( 
        <div className = { rootName } >
            <img 
                className = { rootName + '-display -imgContainer'}
                id = {'testID'}
                src = { dispImage }
                alt = "HangmanImage"
                onMouseDown = {() => {} }
                
            />

            <label 
                className={ rootName + '-failCount'}
            >
                {'Guesses Remaining: ' + getGuessesRemaining()}
            </label>
        </div>
    )
}

export default GalloDisplay;