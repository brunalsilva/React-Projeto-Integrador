import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroProd.css';
import { useHistory, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import useLocalStorage from 'react-use-localstorage';
import Produto from '../../../models/Produto';
import { busca, buscaId, post, put } from '../../../services/Service';
import User from '../../../models/User';
import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';


function CadastroProd() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const [token, setToken] = useLocalStorage('token');
    const [idUser, setIdUser] = useLocalStorage('id');

    const [value, setValue] = React.useState('female');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // alert(event.target.value)
        setValue((event.target as HTMLInputElement).value);
        updatedProduto(event)
    };

    const [produto, setProduto] = useState<Produto>({
        id: 0,
        preco: 0,
        nome: '',
        quantidade: 0,
        servico: true,
        foto: '',
        descricao: '',
        categoria: null,
        usuario: null
    })




    const [categoria, setCategoria] = useState<Categoria>(
        {
            id: 0,
            descricao: '',
            nome: '',
            palavraChave: ''
        })

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history.push("/login")

        }
    }, [token])



    const [user, setUser] = useState<User>({
        id: Number.parseInt(idUser),
        nome: '',
        usuario: '',
        senha: ''

    })

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria,
            usuario: user
        })
    }, [categoria])

    useEffect(() => {
        getCategorias()
        if (id !== undefined) {
            findByIdProduto(id)
        }
    }, [id])

    async function getCategorias() {
        await busca("/categoria", setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdProduto(id: string) {
        await buscaId(`produto/${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/produto`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Produto atualizado com sucesso');
        } else {
            post(`/produto`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })

        }
        back()

    }

    function back() {
        history.push('/produtos')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro produto/serviço</Typography>
                <TextField value={produto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth />
                <TextField value={produto.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="descricao" label="descricao" name="descricao" variant="outlined" margin="normal" fullWidth />
                <TextField value={produto.quantidade} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="quantidade" label="quantidade" name="quantidade" variant="outlined" margin="normal" fullWidth />
                <TextField value={produto.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="foto" label="foto" name="foto" variant="outlined" margin="normal" fullWidth />
                <TextField value={produto.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="preco" label="preco" name="preco" variant="outlined" margin="normal" fullWidth />


                <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">Tipo</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="servico"
                        value={value}
                        onChange={handleChange}
                        row
                    >
                        <FormControlLabel value={true} control={<Radio />} label="Produto" />
                        <FormControlLabel value={false} control={<Radio />} label="Serviço" />

                    </RadioGroup>
                </FormControl>
                <br></br>
                <FormControl>
                    <InputLabel id="demo-simple-select-helper-label">Categoria </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/categoria/${e.target.value}`, setCategoria, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            categorias.map(categoria => (
                                <MenuItem value={categoria.id}>{categoria.descricao}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha uma categoria para  o produto</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroProd;