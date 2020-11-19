import React, {useEffect, useState} from 'react';

import styles from './App.module.css'
import 'antd/dist/antd.css'

import Header from './Components/Header/Header'
import Card from './Components/Card/Card'
import Modal from './Components/Modal/Modal'

import {request} from './js/calculateStopsInTravel'

function App() {
  const [gamefyTheme, setGamefyTheme] = useState(false)
  const [input, setInput] = useState('')
  const [megalights, setMegalights] = useState('')
  const [page, setPage] = useState(0)
  const [results, setResults] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [indexOfCard, setIndexOfCard] = useState(0)
  const [notNumber, setNotNumber] = useState(false)
  const [count, setCount] = useState(0)

  const collectData = async () => {
    const response = await request(page)
    const data = await response.json()
    setCount(data.count)
    setResults(data.results)
  }

  useEffect(() => {
      if(page>0){
        collectData()
      }
    }, [page])

  const gamefyStyleHeader = {
    backgroundImage: 'url("https://st4.depositphotos.com/5623324/19683/v/600/depositphotos_196837832-stock-video-retro-bit-arcade-game-space.jpg")',
    //backgroundImage: 'url("https://i.pinimg.com/originals/6f/0f/5f/6f0f5fc4ea58173c66424c599ca05247.jpg")',
    //backgroundImage: 'url("https://i.pinimg.com/originals/ba/a2/84/baa284faff2374fe7e6901a2811fe121.jpg")',
    fontFamily: "'Press Start 2P', cursive"
  }

  const changePagesGenerate = () => {
    if(count===0) return null

    const totalPages = Math.ceil(count/10)

    let pageName = []

    for(let i = 1; i <= totalPages; i++ ){
      pageName.push(i)
    }

    return (
      <div className={styles.pages}>
          <p>
            <span className={styles.span} onClick={backPage}> {`<<`} </span>
            <span> | </span>
            {pageName.map((number, index) => {
              return (
                <span key={index}>
                  <span  className={styles.span} onClick={() => {toPage(number)}}  style={number===page ? {color: '#999999'} : null }> {number} </span>
                  <span> | </span>
                </span>
                
              )
            })}
            
            <span className={styles.span} onClick={forwordPage}> {`>>`} </span>
          </p>
      </div>
    )
  }

  const submitForm = (event) => {
    event.preventDefault()
    if(isNaN(input)){
      setNotNumber(true)
      setTimeout(() => {setNotNumber(false)}, 4000)
      return null
    }
    setMegalights(input)
    if(page===0){
      setPage(1)
    }
    collectData()

  }

 

  const backPage = () => {
    if(page!==1){
      setPage(page-1)
    }
  }

  const forwordPage = () => {
    const totalPages = Math.ceil(count/10)
    if(page!==totalPages){
      setPage(page+1)
    }
  }

  const toPage = (toPage) => {
    setPage(toPage)
  }

  return (
    <div className={styles.body} style={gamefyTheme ? gamefyStyleHeader : null }>

      <Header gamefyTheme={gamefyTheme} setGamefyTheme={setGamefyTheme} />

      <main className={styles.main}>

        <div className={styles.divForm}>
          {gamefyTheme ? (<img className={styles.shipImage} src="https://media2.giphy.com/media/4Q1O6g68pRX1Pw7hHC/giphy.gif" alt='ship' />) : null}

          <form className={styles.form} onSubmit={submitForm}>
            <label className={styles.label} style={gamefyTheme ? null : {fontSize: '20px'}}>How many Megalights do you need travel?</label>
            <input className={styles.input} type="text" required onChange={(e) => setInput(e.target.value)} />
            <button className={styles.button} type="submit" style={gamefyTheme ? null : {fontSize: '20px', height:'45px', padding: '5px 10px'}}>Find Starships</button>
            {notNumber ?  <p className={styles.label}> The value is not a number! </p> : null}
          </form>

          {gamefyTheme ? (<img className={styles.shipImage + ' ' + styles.shipImage2} src="https://media2.giphy.com/media/4Q1O6g68pRX1Pw7hHC/giphy.gif" alt='ship' />) : null}
        </div>
        

        {/*<img src="https://media2.giphy.com/media/4Q1O6g68pRX1Pw7hHC/giphy.gif" />*/}

        <div className={styles.container}>
            {results ? results.map((result, index) => {
              return <Card data={result} megalights={megalights} key={index} index={index} gamefyTheme={gamefyTheme} setShowModal={setShowModal} setIndexOfCard={setIndexOfCard} />
            }) : null}
        </div>

        
        {results ? changePagesGenerate() : null}


      </main>

      {showModal ? <Modal setShowModal={setShowModal} data={results[indexOfCard]} /> : null}


    </div>
  );
}

export default App;
