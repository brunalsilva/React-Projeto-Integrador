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
import ListaCategoria from './components/categorias/listacategoria/ListaCategoria';
import ListaProduto from './components/produtos/listaproduto/ListaProduto';
import CadastroProd from './components/produtos/cadastroProd/CadastroProd';
import CadastroCategoria from './components/categorias/cadastroCategoria/CadastroCategoria';
import DeletarCategoria from './components/categorias/deleterCategoria/DeletarCategoria';


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
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/cadastrousuario'>
              <CadastroUsuario />
            </Route>

            <Route path='/categorias'>
              <ListaCategoria />
            </Route>
            <Route path='/produtos'>
              <ListaProduto />
            </Route>
            <Route exact path='/formularioProduto'>
              <CadastroProd />
            </Route>
            <Route exact path='/formularioProduto/:id'>
              <CadastroProd />
            </Route>
            <Route exact path='/formularioCategoria'>
              <CadastroCategoria />
            </Route>
            <Route exact path='/formularioCategoria/:id'>
              <CadastroCategoria />
            </Route>
            <Route path='/deletarCategoria/:id'>
              <DeletarCategoria />
            </Route>
          </div>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
