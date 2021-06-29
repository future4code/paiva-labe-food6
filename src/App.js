import React from 'react';
import GlobalState from "./globalstate/GlobalState"
import Router from './router/Router';

function App() {
  return (
  <GlobalState>
      <Router />
  </GlobalState>

  
  );
}

export default App;