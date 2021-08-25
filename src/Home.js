import React from "react";
import Token from "./Token";

const Home = ({ items, showResult }) => {
  return (
    <div className="home">
      {items.map((item, index) => {
        return <Token item={item} key={index} showResult={showResult} />;
      })}
    </div>
  );
};

export default Home;
