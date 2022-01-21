import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/static/footer/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <Footer />
    </Router>
  );
}

export default App;