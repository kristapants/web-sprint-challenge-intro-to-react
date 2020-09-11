import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Characters from './components/Characters'
import mapCharacter from './utilities/mapCharacters'
import './App.css';
import Pagination from './components/Pagination';



const App = () => {

  const [data, setData] = useState({})
  const [info, setInfo] = useState({})

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character`)
      .then((res) => {
        const parsedCharacters = res.data.results.map(mapCharacter)
        setInfo(res.data.info)
        setData(parsedCharacters)
      })
      .catch((err) => console.log(err));
  }, []);

  const onClickPrev = () => {
    console.log('clicked')
  }

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {(data) && <Characters 
          data={data}
       />}
      {(data) && <Pagination
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
      />}
    </div>
  );
}

export default App;
