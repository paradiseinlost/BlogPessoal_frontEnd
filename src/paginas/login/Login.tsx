import React from 'react';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box, } from '@mui/material';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {

    return (

        <Grid container>
            <Grid xs={6}>
                <Box>

                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{ fontWeight: 'bold' }}>Entrar</Typography>
                        <TextField id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' className='logincolor'>
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' className='fonteLogin'>Não tem uma conta?</Typography>
                        </Box>
                        <Typography variant='subtitle1' gutterBottom align='center' className='fonteLogin'>Cadastre-se</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>
             <img src="https://i.pinimg.com/564x/8d/9f/e6/8d9fe6a3517123335a065cf0b3caea06.jpg" alt="" width="400px" height="600px"/>
            </Grid>
        </Grid>
    );

}
export default Login;