import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    let history = useHistory();
    const [token, setToken] = useLocalStorage('token');
    const [id, setId] = useLocalStorage('id');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }

    )
    const [userLoginResult, setUserLoginResult] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }


    useEffect(() => {
        if (userLoginResult.token != '') {
            setToken(userLoginResult.token)
            setId(userLoginResult.id.toString())
            history.push('/home')
        }
    }, [userLoginResult.token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        /*if(userLogin.senha.length < 8){
            toast.error('Sua senha deve conter no mínimo 8 caracteres',{
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
            });  */

        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setUserLoginResult)
            
            toast.success('Usuario logado com sucesso', {
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
        } catch (error) {
            alert('Dados do usuário inconsistentes. Erro ao logar!');
              toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
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
        }

    }


    return (
        <>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' lg={6} md={8}  xs={12}>
                <Box sx={{ p: {lg: "150px", sm:'100px' } }}>
                    <Box className='box-fundo-opaca'>
                        <form onSubmit={onSubmit} className='inside-box-login'>
                            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='entrar'>Entrar</Typography>
                            <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                            <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                            <Box marginTop={4} textAlign='center'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                            </Box>
                        </form>
                        <Box marginTop={2} display='flex' justifyContent='center'>
                            <Box marginRight={1}>
                                <Typography variant='subtitle1' gutterBottom align='center' className='ntemconta'>Não tem uma conta?</Typography>
                            </Box>
                            <Link className='text-decorator-none' to='/cadastrousuario'>
                                <Typography variant='subtitle1' gutterBottom align='center' className='cadastre-se'>Cadastre-se</Typography>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Grid lg={6} md={4} xs={1} >
                <Box  sx={{ display: { xs: 'none', md: 'block' } }} className='ilustracao-login'></Box>
            </Grid>
        </Grid>
        </>
    );
}


export default Login;