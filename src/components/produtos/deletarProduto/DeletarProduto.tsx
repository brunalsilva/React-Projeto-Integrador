import React, { useEffect, useState } from 'react'
import { Typography, Button, Box, Card, CardActions, CardContent, Grid } from "@material-ui/core"
import './DeletarProduto.css';
import { useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Produto from '../../../models/Produto';
import { busca, buscaId, deleteId } from '../../../services/Service';
import User from '../../../models/User';


function DeletarProduto() {
  let history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [token, setToken] = useLocalStorage('token');
  const [produto, setProduto] = useState<Produto>()
  const [usuarios, setUsuarios] = useState<User[]>([])
  const [idUser, setIdUser] = useLocalStorage('id');



  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado")
      history.push("/login")

    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

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


  async function findById(id: string) {
    buscaId(`/produto/${id}`, setProduto, {
      headers: {
        'Authorization': token
      }
    })
  }


  function sim() {


    history.push('/produtos')
    deleteId(`/produto/${id}`, {
      headers: {
        'Authorization': token
      }
    });
    alert('Produto deletado com sucesso');
  }



  function nao() {
    history.push('/produtos')
  }

  return (
    <>
      <Grid container
        direction="row"
        justifyContent="center"
        alignItems="center"
        xs={12}>
        <Box marginX={20} sx={{ maxWidth: 300, minHeight: 400 }} display="flex" alignItems="center" justifyContent="center">
          <Box m={2}>
            <Card variant="outlined" className='card-delete'>
              <CardContent>
                <Box justifyContent="center">
                  <Typography color="textSecondary" gutterBottom className='card-descricao-delete'>
                    {usuarios.map(usuario => usuario.id == parseInt(idUser) ? usuario.nome : "")}, tem certeza que deseja deletar o {produto?.servico == true ? "produto" : "serviço"}:
                  </Typography>
                  <Box className='box-nome-produto'>
                  <Typography color="textSecondary" className='card-secondary-delete'>
                    {produto?.nome}
                  </Typography>
                  </Box>
                </Box>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                  <Box mx={2}>
                    <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                      Sim
                    </Button>
                  </Box>
                  <Box mx={2}>
                    <Button onClick={nao} variant="contained" size='large' color="secondary">
                      Não
                    </Button>
                  </Box>
                </Box>
              </CardActions>
            </Card>
          </Box>
        </Box>
      </Grid>
    </>
  );
}
export default DeletarProduto;