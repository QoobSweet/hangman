import React, {useState, useEffect} from 'react';
import './letterSelector.css'

const LetterSelector = (props) => {
    const rootName = 'LetterSelector';




const alphabet = [
    "A", "B", "C", "D", "E", 
    "F", "G", "H", "I", "J", 
    "K", "L", "M", "N", "O", 
    "P", "Q", "R", "S", "T", 
    "U", "W", "X", "Y", "Z"
]

    const generateLetterLabel = (letter) => {

        return (
        <label className = {rootName + '-alphabet'} >
            {letter}
        </label>
        )
    }


    const generateLetterLabels = () =>{
        const letterLabels = [];

        for(let i = 0; i < alphabet.length; i++){
          letterLabels.push(
              generateLetterLabel(alphabet[i])
            );
        }
        return letterLabels;
    }



    return (
        <div className={rootName} >   
            {generateLetterLabels()}

        </div>
    )
}

export default LetterSelector;