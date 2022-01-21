import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/static/footer/Footer';
import PorQueDandara from './paginas/PorQueDandara/PorQueDandara';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <div style={{ minHeight: '100vh'}} className='background'>
          <Route path='/PorQueDandara'>
            <PorQueDandara />
          </Route>
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;