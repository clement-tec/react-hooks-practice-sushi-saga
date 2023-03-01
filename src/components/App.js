import React,{useEffect, useState} from "react";

import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API =` http://localhost:3001/sushis`;

function App() {
  const [renderSushis, setRenderSushis] = useState([]) 
  const [offset, setOffset] = useState(0);
  const [money, setMoney]= useState(200)
  const DISPLAY_COUNT = 4
  

  useEffect(()=> {
    fetch(API)
    .then(response => response.json())
    .then(json => setRenderSushis(json))
  }, [])

  function handleEatSushi(piece) {
    const remainingMoney = money - piece.price
    if(remainingMoney >=0) {
    setMoney(remainingMoney)
    setRenderSushis(renderSushis.map((sushi)=>sushi.id === piece.id?{...sushi, eaten: true} : sushi))
    }
} 

  function handleMoreClick() {
    setOffset((offset+DISPLAY_COUNT) %100)
  }

  return (
    <div className="app">
      <SushiContainer renderSushis={renderSushis.slice(offset, offset+DISPLAY_COUNT)}
      handleMoreClick={handleMoreClick} handleEatSushi= {handleEatSushi}/>
      <Table plates={ renderSushis.filter(sushi => sushi.eaten)}  money={money}/>
    </div>
  );
}

export default App;
