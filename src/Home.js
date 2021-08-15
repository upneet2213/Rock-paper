import React from 'react'
import Token from './Token'

const Home = ({setUserChoice,items}) => {
    return (
        
            <div className="home">
                {items.map((item,index)=>{
                    return <Token item={item} setUserChoice={setUserChoice} key={index} />
                })}
            </div>
        
    )
}

export default Home
