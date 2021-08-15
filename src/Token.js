import React from 'react'

const Token = ({item,setUserChoice,userChoice,pcChoice}) => {
    const{image,name}= item;
    return (
        <div>
            <button className={`btn btn-${name} ${item===userChoice?'user-choice':null} ${item===pcChoice?'pc-choice':null}`}><img src={image} alt="" onClick={()=>setUserChoice(item)}/></button>
        </div>
    )
}

export default Token
