import React from 'react';
import './App.css';
import { chosenTheme } from "./theme";
import Main from './containers/main';

function App() {
  return (
      <div>
        <Main theme={chosenTheme} />
      </div>
  );
}

export default App;
