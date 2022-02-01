import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto';
import { busca } from '../../../services/Service'
import { Box, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import useLocalStorage from 'react-use-localstorage';
import { useHistory } from 'react-router-dom'
import { CardMedia, Card } from '@mui/material';



function ListaServico() {
    const [servicos, setServicos] = useState<Produto[]>([])
    const [token, setToken] = useLocalStorage('token');
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

    return (
        <>
            {
                servicos.map(servico => servico.servico.toString() == "false" ? (
                    <Box m={2} className='box' >
                        <Card variant="outlined" sx={{ maxWidth: 345 }}>
                            <CardMedia component="img" height="194" image={servico.foto} alt={servico.nome} />
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    {servico.servico.toString() == "false" ? "Serviço" : "Produto"}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {servico.nome}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {servico.descricao}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {servico.categoria?.descricao}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {servico.preco}
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
                ) : '')
            }
        </>
    )
}

export default ListaServico;