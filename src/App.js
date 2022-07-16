import React, { useEffect, useState } from 'react'
import GameCardContainer from './components/GameCardContainer/GameCardContainer'
import Navbar from './components/Navbar/Navbar';

const App = () => {

    const [gameData, setGameData] = useState({});
    const [gameDataOriginal, setGameDataOriginal] = useState({});

    useEffect(() => {
        const url = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json";
      
        const fetchData = (async () => {
          try {
            const response = await fetch(url);
            const json = await response.json();
            setGameData(json);
            setGameDataOriginal(json);
          } catch (error) {
            console.log("error", error);
          }
        })();
    }, []);

  return (
    <div>
        <Navbar gameData = {[gameData, setGameData, gameDataOriginal]} />
        <GameCardContainer gameData = {gameData} />
    </div>
  )
}

export default App