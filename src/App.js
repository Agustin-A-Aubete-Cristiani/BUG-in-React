import React from "react";
import s from './App.scss';

// ** COMPONENTS
import Formulary from "./Components/Formulary/Formulary";
import RenderSection from "./Components/RenderSection/RenderSection";

const App = () => {
  return (
    <div className={s.AppWrapper}>
      <Formulary/>
      <RenderSection/>
    </div>
  )
}

export default App;