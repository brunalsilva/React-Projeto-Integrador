import React from 'react';
import './App.css';
import Login from './paginas/login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>

        <Route exact path='/'>     <Login />     </Route>

      </Router>
    </>
  );
}

export default App;
