import React,{useState,useEffect} from "react";
import Home from "./Home";
import Modal from "./Modal";
import logo from '../src/images/logo.svg'
import Result from "./Result";
import rock from '../src/images/icon-rock.svg'
import paper from '../src/images/icon-paper.svg'
import scissors from '../src/images/icon-scissors.svg'

const items=[{image:rock,name:'rock'},{image:paper,name:'paper'},{image:scissors,name:'scissors'}]
function App() {
  const [isModalOpen,setIsModalOpen]=useState(false)
  const[userChoice,setUserChoice]=useState({})
  const[pcChoice,setPcChoice]=useState({})
  const [score,setScore]=useState(0)
  const [state,setState]= useState('')

  const win=()=>{
    setScore(score+1)
    setState('WIN')
  }
  const lose=()=>{
    if(score>0){
      setScore(score-1)
    }
    setState('LOSE')
  }
  useEffect(()=>{
    if(isModalOpen){document.addEventListener('keydown', (e) => {
      e.key === 'Escape' && setIsModalOpen(false)
    })
    return () => {
      document.removeEventListener('keydown', (e) => e)
    }
  }},[isModalOpen])
  const handleCloseModal=()=>{
    setIsModalOpen(false)
  }
  const handleOpenModal=()=>{
    setIsModalOpen(true)
  }
  useEffect(()=>{
    if(Object.keys(userChoice).length>0){
      const newItems=items.filter((item)=>JSON.stringify(item) !== JSON.stringify(userChoice) )
      console.log(newItems)
      setPcChoice(newItems[Math.floor(Math.random()*items.length)])
    }
     
  },[userChoice])
  useEffect(()=>{
    if(Object.keys(userChoice).length>0){
      if(userChoice===items[0]){
        if(pcChoice===items[1]){
          lose()
        }
        else{
          win()
        }
      }
      else if(userChoice===items[1]){
        if(pcChoice===items[0]){
          win()
        }
        else{
          lose()
        }
      }
      else if(userChoice===items[2]){
        if(pcChoice===items[0]){
          lose()
        }
        else{
          win()
        }
      }
    }
    
  },[pcChoice])
  const newGame=()=>{
    setUserChoice({})
    setPcChoice({})
    setState('')
  }
  return (
    <>
   <Modal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal}/>
    
    <div className="section">
      <div className="header">
        <img src={logo} alt="" className="logo" />
        <div className="score">
          <h4>Score</h4>
          <h1>{score}</h1>
        </div>
      </div>
      {Object.keys(userChoice).length===0?<Home setUserChoice={setUserChoice} items={items}/>:<Result userChoice={userChoice} pcChoice={pcChoice} state={state} newGame={newGame}/>}
      <div className="rules">
        <button className="btn-rules" onClick={handleOpenModal}><h4>Rules</h4></button>
      </div>
    </div>
    </>
  );
}

export default App;
