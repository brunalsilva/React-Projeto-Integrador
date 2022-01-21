import React from 'react';
import logo from './logo.svg';
import Home from './paginas/home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/static/footer/Footer';
import PorQueDandara from './paginas/PorQueDandara/PorQueDandara';
import './App.css';
import Navbar from './components/static/navbar/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <div style={{ minHeight: '100vh' }} className='background'>
            <Route path='/PorQueDandara'>
              <PorQueDandara />
            </Route>
            <Route>
              <Home />
            </Route>
          </div>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;