import React from 'react'
import Token from './Token'

const Home = ({pcChoice,userChoice,setUserChoice,items}) => {
    return (
        
            <div className="home">
                {items.map((item,index)=>{
                    return <Token item={item} setUserChoice={setUserChoice} key={index} pcChoice={pcChoice} userChoice={userChoice} />
                })}
            </div>
        
    )
}

export default Home
