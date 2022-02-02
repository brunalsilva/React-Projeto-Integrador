import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto';
import { busca } from '../../../services/Service'
import { Box, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import './ListaProduto.css';
import useLocalStorage from 'react-use-localstorage';
import { useHistory } from 'react-router-dom'
import { CardMedia, Card } from '@mui/material';
import User from '../../../models/User';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { toast, Slide } from 'react-toastify';


function ListaProduto() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [token, setToken] = useLocalStorage('token');
  const [idUser, setIdUser] = useLocalStorage('id');
  const [usuarios, setUsuarios] = useState<User[]>([])

  let history = useHistory();

  useEffect(() => {
    if (token == "") {
      toast.error('Você precisa estar logado', {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        theme: "dark",
        progress: undefined,
        transition: Slide,
      
    }); 
      history.push("/login")

    }
  }, [token])

  async function getProduto() {
    await busca("/produto", setProdutos, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getProduto()

  }, [produtos.length])



  useEffect(() => {

    getProduto()
  }, [produtos.length])



  useEffect(() => {

    getUsuario()

  }, [usuarios.length])


  async function getUsuario() {
    await busca("/usuarios/all", setUsuarios, {
      headers: {
        'Authorization': token
      }
    })
  }


  //vetor com produtos do tipo produto
  var produtosFiltrados = produtos.filter(produto => produto.servico.toString() == "true");



  return (
    <>
      <Grid container
        direction="row"
        justifyContent="center"
        alignItems="flex-start" 
        xs={12}>
        {
          produtosFiltrados.map(produto => produto.usuario?.id == parseInt(idUser) ? (
            <Box m={2}>
              <Card variant="outlined" sx={{ maxWidth: 250, minHeight: 407 }} className='card'>
                <CardMedia component="img" height="194" image={produto.foto} alt={produto.nome} />
                <CardContent>
                  <Typography color="textSecondary" gutterBottom className='card-secondary'>
                    {produto.servico.toString() == "true" ? "Produto" : ""}
                  </Typography>
                  <Typography variant="h5" component="h2" className='card-h2'>
                    {produto.nome}
                  </Typography>
                  <Box className='box-descricao' >
                    <Typography variant="body2" component="p" className='card-descricao'>
                      {produto.descricao}
                    </Typography>
                    <Typography variant="body2" component="p" className='card-descricao'>
                      {produto.categoria?.descricao}
                    </Typography>
                  </Box>
                  <Typography variant="body2" component="p" className='card-preco'>
                    <b>R$ {produto.preco}</b>
                  </Typography>
                  <Typography variant="body2" component="p" className='card-preco'></Typography>
                </CardContent>
                <CardActions>
                  <Box display="flex" justifyContent="center" mb={1.5}>

                    <Link to={`/formularioProduto/${produto.id}`} className="text-decorator-none" >
                      <Box mx={1}>
                        <Button variant="contained" className="marginLeft" size='small' color="primary" >
                          Atualizar
                        </Button>
                      </Box>
                    </Link>
                    <Link to={`/deletarProduto/${produto.id}`} className="text-decorator-none">
                      <Box mx={1}>
                        <Button variant="contained" size='small' color="secondary">
                         Deletar
                        </Button>
                      </Box>
                    </Link>
                  </Box>
                </CardActions>
              </Card>
            </Box>
          ) : (
            <Box m={2} >
                <Card variant="outlined" sx={{ maxWidth: 250, minHeight: 407 }} className='card'>
                <CardMedia component="img" height="194" image={produto.foto} alt={produto.nome}/>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom className='card-secondary'>
                    {produto.servico.toString() == "true" ? "Produto" : ""}
                  </Typography>
                  <Typography variant="h5" component="h2" className='card-h2'>
                    {produto.nome}
                  </Typography>
                    <Box className='box-descricao' >
                  <Typography variant="body2" component="p" className='card-descricao'>
                    {produto.descricao}
                  </Typography>
                  <Typography variant="body2" component="p" className='card-descricao'>
                    {produto.categoria?.descricao}
                  </Typography>
                    </Box>
                  <Typography variant="body2" component="p" className='card-preco'>
                    <b>R$ {produto.preco}</b>
                  </Typography>
                  <Typography variant="body2" component="p" className='card-preco'></Typography>
                </CardContent>
                <CardActions>
                  <Box display="flex" justifyContent="center" mb={1.5}>

                    <Link to={``} className="text-decorator-none" >
                      <Box mx={1}>
                        <Button variant="contained" className="marginLeft" size='small' color="primary" >
                          <FavoriteIcon className='icon heart-icon'/>
                        </Button>
                      </Box>
                    </Link>
                    <Link to={``} className="text-decorator-none">
                      <Box mx={1}>
                        <Button variant="contained" size='small' color="secondary">
                          Comprar 
                        </Button>
                      </Box>
                    </Link>
                  </Box>
                </CardActions>
              </Card>
            </Box>
          ))
        }
      </Grid>
    </>
  )
}

export default ListaProduto;