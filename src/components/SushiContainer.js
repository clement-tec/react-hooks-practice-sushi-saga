import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({renderSushis, handleMoreClick, handleEatSushi}) {
  return (
    <div className="belt">
      {renderSushis.map((sushi)=> (<Sushi key ={sushi.id} sushi= {sushi} handleEatSushi={handleEatSushi} />
      ))}
      <MoreButton handleMoreClick={handleMoreClick} />
    </div>
  );
}

export default SushiContainer;
