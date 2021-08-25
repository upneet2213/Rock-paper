import React from "react";

const Token = ({ item, userChoice, pcChoice, showResult }) => {
  const { image, name } = item;
  return (
    <div>
      <button
        className={`btn btn-${name} ${
          item === userChoice ? "user-choice" : null
        } ${item === pcChoice ? "pc-choice" : null}`}
        onClick={() => showResult(item)}
      >
        <img src={image} alt="" />
      </button>
    </div>
  );
};

export default Token;
