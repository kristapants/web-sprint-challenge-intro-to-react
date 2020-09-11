import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Characters from './components/Characters'
import mapCharacter from './utilities/mapCharacters'
import './App.css';
import Pagination from './components/Pagination';
import styled from 'styled-components'


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
`

const App = () => {

  const [data, setData] = useState([])
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
    axios.get(info.prev)
    .then((res) => {
      const parsedCharacters = res.data.results.map(mapCharacter)
      setInfo(res.data.info)
      setData(parsedCharacters)
      console.log(parsedCharacters)
      console.log(res.data.info)
    })
    .catch((err) => console.log(err));
    console.log('clicked prev')
  }

  const onClickNext = () => {
    axios.get(info.next)
    .then((res) => {
      const parsedCharacters = res.data.results.map(mapCharacter)
      setInfo(res.data.info)
      setData(parsedCharacters)
      console.log(parsedCharacters)
      console.log(res.data.info)
    })
    .catch((err) => console.log(err));
    console.log('clicked next')
  }

  const hasNext = info && info.next
  const hasPrev = info && info.prev

  return (
    <AppContainer>
      <h1 className="Header">Rick and Morty Cast</h1>
      {(data) && <Characters 
          data={data}
       />}
      {(data) && <Pagination
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
        hasNext={hasNext}
        hasPrev={hasPrev}
      />}
    </AppContainer>
  );
}

export default App;
