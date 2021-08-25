import React, { useState, useEffect } from "react";
import Home from "./Home";
import Modal from "./Modal";
import logo from "../src/images/logo.svg";
import Result from "./Result";
import rock from "../src/images/icon-rock.svg";
import paper from "../src/images/icon-paper.svg";
import scissors from "../src/images/icon-scissors.svg";

const items = [
  { image: rock, name: "rock" },
  { image: paper, name: "paper" },
  { image: scissors, name: "scissors" },
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userChoice, setUserChoice] = useState({});
  const [pcChoice, setPcChoice] = useState({});
  const [isPlaying, setIsPlaying] = useState(true);
  const [score, setScore] = useState(0);
  const [state, setState] = useState("");

  const win = () => {
    setScore(score + 1);
    setState("WIN");
  };

  const lose = () => {
    if (score > 0) {
      setScore(score - 1);
    }
    setState("LOSE");
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("keydown", (e) => {
        e.key === "Escape" && setIsModalOpen(false);
      });
      return () => {
        document.removeEventListener("keydown", (e) => e);
      };
    }
  }, [isModalOpen]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const showResult = (x) => {
    const newUserChoice = x;

    const newItems = items.filter(
      (item) => JSON.stringify(item) !== JSON.stringify(x)
    );

    const newPcChoice = newItems[Math.floor(Math.random() * 2)];

    if (newUserChoice === items[0]) {
      if (newPcChoice === items[1]) {
        lose();
      } else {
        win();
      }
    } else if (newUserChoice === items[1]) {
      if (newPcChoice === items[0]) {
        win();
      } else {
        lose();
      }
    } else if (newUserChoice === items[2]) {
      if (newPcChoice === items[0]) {
        lose();
      } else {
        win();
      }
    }

    setUserChoice(newUserChoice);
    setPcChoice(newPcChoice);
    setIsPlaying(false);
  };

  const newGame = () => {
    setUserChoice({});
    setPcChoice({});
    setState("");
    setIsPlaying(true);
  };

  return (
    <>
      <Modal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} />

      <div className="section">
        <div className="header">
          <img src={logo} alt="" className="logo" />
          <div className="score">
            <h4>Score</h4>
            <h1>{score}</h1>
          </div>
        </div>
        {isPlaying ? (
          <Home
            setUserChoice={setUserChoice}
            items={items}
            showResult={showResult}
          />
        ) : (
          <Result
            userChoice={userChoice}
            pcChoice={pcChoice}
            state={state}
            newGame={newGame}
          />
        )}
        <div className="rules">
          <button className="btn-rules" onClick={handleOpenModal}>
            <h4>Rules</h4>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
