import React, {useState} from "react";
import s from './Formulary.scss'

const Formulary = () => {
  const [inputURL, setInputURL] = useState("")
  
  const handleChangeInputURL = (event) => {
    setInputURL(event.target.value);
  }
  
  const handleSubmit = (event) => {
    console.log(inputURL)
    event.preventDefault();
  }
  
  return (
    <form 
      className={s.Formulary}
      onSubmit={handleSubmit}
    >
      <label htmlFor="url-input">URL:</label>
      <input 
        onChange={handleChangeInputURL}
        value={inputURL}
        className={s.Formulary__InputURL}
        name="url-input" 
        type="text" 
        placeholder="Type your request URL here"
      />
      <input 
        className={s.Formulary__InputSubmit}
        type="submit" 
        value="Submit"
      />
    </form>
  )
}

export default Formulary;