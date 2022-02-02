import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto';
import { busca } from '../../../services/Service'
import { Box, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import useLocalStorage from 'react-use-localstorage';
import { useHistory } from 'react-router-dom'
import { CardMedia, Card } from '@mui/material';
import './ListaServico.css';

function ListaServico() {
    const [servicos, setServicos] = useState<Produto[]>([])
    const [token, setToken] = useLocalStorage('token');
    const [idUser, setIdUser] = useLocalStorage('id');

    let history = useHistory();

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history.push("/login")

        }
    }, [token])

    async function getServico() {
        await busca("/produto", setServicos, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getServico()

    }, [servicos.length])

    //vetor com produtos do tipo serviço
    var servicosFiltrados = servicos.filter(servico => servico.servico.toString() == "false");

    return (
        <>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                xs={12}>
                {
                    servicosFiltrados.map(servico => servico.usuario?.id == parseInt(idUser) ? (
                        <Box m={2} className='box' >
                            <Card variant="outlined" sx={{ maxWidth: 250, minHeight: 407 }} className='card'>
                                <CardMedia component="img" height="194" image={servico.foto} alt={servico.nome} />
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom className='card-secondary'>
                                        {servico.servico.toString() == "false" ? "Serviço" : "Produto"}
                                    </Typography>
                                    <Typography variant="h5" component="h2" className='card-h2'>
                                        {servico.nome}
                                    </Typography>
                                    <Typography variant="body2" component="p" className='card-descricao'>
                                        {servico.descricao}
                                    </Typography>
                                    <Typography variant="body2" component="p" className='card-categoria'>
                                        {servico.categoria?.descricao}
                                    </Typography>
                                    <Typography variant="body2" component="p" className='card-preco'>
                                        <b>
                                            R$ {servico.preco}
                                        </b>
                                    </Typography>
                                    <Typography variant="body2" component="p"></Typography>
                                </CardContent>
                                <CardActions>
                                    <Box display="flex" justifyContent="center" mb={1.5}>

                                        <Link to={`/formularioProduto/${servico.id}`} className="text-decorator-none" >
                                            <Box mx={1}>
                                                <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                    atualizar
                                                </Button>
                                            </Box>
                                        </Link>
                                        <Link to={`/deletarProduto/${servico.id}`} className="text-decorator-none">
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
                    ) : <Box m={2} className='box' >
                        <Card variant="outlined" sx={{ maxWidth: 250, minHeight: 407 }} className='card'>
                            <CardMedia component="img" height="194" image={servico.foto} alt={servico.nome} />
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom className='card-secondary'>
                                    {servico.servico.toString() == "false" ? "Serviço" : "Produto"}
                                </Typography>
                                <Typography variant="h5" component="h2" className='card-h2'>
                                    {servico.nome}
                                </Typography>
                                <Typography variant="body2" component="p" className='card-descricao'>
                                    {servico.descricao}
                                </Typography>
                                <Typography variant="body2" component="p" className='card-categoria'>
                                    {servico.categoria?.descricao}
                                </Typography>
                                <Typography variant="body2" component="p" className='card-preco'>
                                    <b>
                                        R$ {servico.preco}
                                    </b>
                                </Typography>
                                <Typography variant="body2" component="p"></Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>

                                    <Link to={``} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                Contratar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>)
                }
            </Grid>
        </>
    )
}

export default ListaServico;