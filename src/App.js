import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UC } from './passchar/passChar';
// import image from './isometric-online-registration-concept/496162-PI1SED-61.jpg'

function App() {
  let [upper, setUpper] = useState(false)
  let [lower, setLower] = useState(false)
  let [number, setNumber] = useState(false)
  let [symbol, setSymbol] = useState(true)
  let [passwordlen, setPasswordlen] = useState(10)
  let [showpass, setShowpass] = useState('')

  let createpassword = () => {
    let finalpass = ""
    let char = ""
    if (upper || lower || number || symbol) {
      if (upper) char += UC
      if (lower) char += LC
      if (number) char += NC
      if (symbol) char += SC
      for ( let i = 0; i < passwordlen; i++) {
        finalpass += char.charAt(Math.floor(Math.random() * char.length))
      }
      setShowpass(finalpass)
    }
    else {
      alert("Please Select Atleast One Case")
    }
  }
  let copypass=()=>{
    navigator.clipboard.writeText(showpass)
  }


  return (
    <div className="App">
      <div className='pass'>
        <h2>Password Generator</h2>

        <div className='passbox'>
          <input type='text' value={showpass} readOnly/> <button onClick={copypass}>Copy</button>
        </div>

        <div className='passlength'>
          <label>Password length</label>
          <input type='number' max={20} value={passwordlen} min={10} onChange={(event) => setPasswordlen(event.target.value)} placeholder='Digit' />
        </div>

        <div className='passUpper'>
          <label>Include UpperCase Letter</label>
          <input type='Checkbox' checked={upper} onChange={() => setUpper(!upper)} />
        </div>

        <div className='passUpper'>
          <label>Include LowerCase Letter</label>
          <input type='Checkbox' checked={lower} onChange={() => setLower(!lower)} />
        </div>

        <div className='passUpper'>
          <label>Include Number</label>
          <input type='Checkbox' checked={number} onChange={() => setNumber(!number)} />
        </div>

        <div className='passUpper'>
          <label>Include Symbol</label>
          <input type='Checkbox' checked={symbol} onChange={() => setSymbol(!symbol)} />
        </div>

        <div >
          <button className='btn' onClick={createpassword}>Generate Password</button>
        </div>

      </div>


    </div>
  );
}

export default App;
