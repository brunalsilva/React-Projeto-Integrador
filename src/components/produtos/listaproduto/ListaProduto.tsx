import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto';
import { busca } from '../../../services/Service'
import { Box, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaProduto.css';
import useLocalStorage from 'react-use-localstorage';
import { useHistory } from 'react-router-dom'
import { CardMedia, Card} from '@mui/material';



function ListaProduto() {
    const [produtos, setProdutos] = useState<Produto[]>([])
    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();
  
    useEffect(() => {
      if (token == "") {
        alert("Você precisa estar logado")
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
  
    return (
      <>
        {
          produtos.map(produto => produto.servico.toString()=="true"? (
            <Box m={2} >
              <Card variant="outlined" sx={{maxWidth:345}}>
                <CardMedia component="img" height="194" image={produto.foto} alt={produto.nome}/>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    {produto.servico.toString()=="true"?"Produto":""}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {produto.nome}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {produto.descricao}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {produto.categoria?.descricao}
                  </Typography>
                  <Typography variant="body2" component="p">
                    <b>R$ {produto.preco}</b>
                  </Typography>
                  <Typography variant="body2" component="p"></Typography>
                </CardContent>
                <CardActions>
                  <Box display="flex" justifyContent="center" mb={1.5}>
  
                    <Link to={`/formularioProduto/${produto.id}`} className="text-decorator-none" >
                      <Box mx={1}>
                        <Button variant="contained" className="marginLeft" size='small' color="primary" >
                          atualizar
                        </Button>
                      </Box>
                    </Link>
                    <Link to={`/deletarProduto/${produto.id}`} className="text-decorator-none">
                      <Box mx={1}>
                        <Button variant="contained" size='small' color="secondary">
                          deletar
                        </Button>
                      </Box>
                    </Link>
                  </Box>
                </CardActions>
              </Card>
            </Box>
          ):'')
        }
      </>
    )
  }
  
  export default ListaProduto;