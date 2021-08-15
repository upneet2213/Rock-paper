import React from 'react'
import Token from './Token'


const Result = ({userChoice,pcChoice,state,newGame}) => {
    
    return (
        <div className="results">
            <div >
                <h4>You PICKED</h4>
                <Token item={userChoice} userChoice={userChoice} />
            </div>
            <div className="result">
                <h1>YOU {state}</h1>
                <button className="play-again" onClick={newGame}><h4>PLAY AGAIN</h4></button>
            </div>
            <div >
                <h4>THE HOUSE PICKED</h4>
                <Token item={pcChoice}  pcChoice={pcChoice}/>
            </div>
            
        </div>
    )
}

export default Result
