import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';


function App() {
  const [page, setPage] = useState('');
  const [fontSize, setFontSize] = useState('');
  const [fontType, setFontType] = useState('');
  const [spacing, setSpacing] = useState('');
  const [response, setResponse] = useState('');
  const prompt = 'How many words would the following paper be on average assuming 1-inch margins. Its font is ' + fontType + ', it has ' + page + ' pages, uses ' + spacing + ' spacing, and the font size is ' + fontSize + '.'
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://countmyessay.vercel.app//items", { prompt })
      .then((res) => {
        setResponse(res.data)
      })
      .catch((err) =>{
        console.error(err)
      }
      )
      console.log(response)
  }
  return (
    <div className="App">
      <header className="App-header">
       HOW MANY WORDS?
      </header>
      <div className = "Body">
        <h2> Fill out the following fields </h2>
        <form onSubmit={handleSubmit}>
          <label>
            How many pages is your essay?
            <input
            type="text"
            value = {page}
            onChange={(e) => setPage(e.target.value)}
           />
           

          </label>
          <br></br>
          <label>
            What is the font size of your essay?
            <input
            type="text"
            value = {fontSize}
            onChange={(e) => setFontSize(e.target.value)}
           />

          </label>
          <br></br>
          <label>
            What is the font type of your essay?
            <input
            type="text"
            value = {fontType}
            onChange={(e) => setFontType(e.target.value)}
           />

          </label>
          <br></br>
          <label>
            What is the spacing of your essay?
            <input
            type="text"
            value = {spacing}
            onChange={(e) => setSpacing(e.target.value)}
           />

          </label>
          <br></br>
          <button type="submit">Submit</button>

        </form>

      </div>
      <div className = "Response">
        <p>{response} </p>


      </div>
    </div>


  );
}

export default App;
