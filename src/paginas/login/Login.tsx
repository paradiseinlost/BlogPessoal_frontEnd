import React, { useState, useEffect, ChangeEvent } from 'react';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box, } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';
import './Login.css';
import UserLogin from '../../models/UserLogin';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/Actions';

function Login() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: '',


        }
    )


    function updateModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value

        })
    }

    useEffect(() => {
        if (token !== '') {
            dispatch(addToken(token))
            navigate('/home')
        }
    }, [token])



    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {

            await login(`/usuarios/logar`, userLogin, setToken)
            alert('Usuario Logado com Sucesso !');

        } catch (error) {
            alert('Dados do usuario inconsistente . Erro ao Logar !');
        }

    }

    return (

        <Grid container>
            <Grid xs={6}>
                <Box>

                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{ fontWeight: 'bold' }}>Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>

                            <Button type='submit' variant='contained' className='logincolor'>
                                Logar
                            </Button>

                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' className='fonteLogin'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastroUsuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='fonteLogin'>Cadastre-se</Typography>
                        </Link>

                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>
                <img src="https://i.pinimg.com/564x/8d/9f/e6/8d9fe6a3517123335a065cf0b3caea06.jpg" alt="" width="400px" height="600px" />
            </Grid>
        </Grid>
    );

}
export default Login;