import React from 'react';
import logo from './logo.svg';
import Home from './paginas/home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/static/footer/Footer';
import PorQueDandara from './paginas/PorQueDandara/PorQueDandara';
import './App.css';
import Navbar from './components/static/navbar/Navbar';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaProduto from './components/produtos/listaproduto/ListaProduto';
import CadastroProd from './components/produtos/cadastroProd/CadastroProd';

import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';

import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './store/store';
import SobreNos from './paginas/SobreNos/SobreNos';
import FaleConosco from './paginas/FaleConosco/FaleConosco';
import ListaServico from './components/servicos/listaservico/ListaServico';


function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Switch>
          <div className='background'>
            <Route path='/PorQueDandara'>
            <Navbar />
              <PorQueDandara />
            </Route>
            <Route exact path='/'>
            <Navbar />
              <Home />
            </Route>
            <Route path='/home'>
            <Navbar />
              <Home />
            </Route>
            <Route path='/login'>
            <Navbar />
              <Login />
            </Route>
            <Route path='/cadastrousuario'>
            <Navbar />
              <CadastroUsuario />
            </Route>
            <Route path='/sobrenos'>
            <Navbar />
              <SobreNos />
            </Route>
            <Route path='/faleconosco'>
            <Navbar />
              <FaleConosco />
            </Route>
            <Route path='/produtos'>
            <Navbar />
              <ListaProduto />
            </Route>
            <Route exact path='/formularioProduto'>
            <Navbar />
              <CadastroProd />
            </Route>
            <Route exact path='/formularioProduto/:id'>
            <Navbar />
              <CadastroProd />
            </Route>
            <Route path='/deletarProduto/:id'>
            <Navbar />
              <DeletarProduto />
            </Route>
            <Route path='/servicos'>
            <Navbar />
              <ListaServico />
            </Route>
          </div>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;