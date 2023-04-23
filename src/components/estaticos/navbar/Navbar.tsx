import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    function gologout() {
        setToken('')
        alert("Usuario foi Deslogado !")
        navigate('/login')
    }

    return (
        <>
            <AppBar position="static" className="appBar">
                <Toolbar variant="dense">
                    <Box>
                        <Typography variant="h5" className="fontenav" >
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box className="box-itens">

                        <Box mx={1}>
                            <Link to={'/home'} className="text-decorator-none">
                                <Typography variant="h6" className="fontenav">
                                    Home
                                </Typography>
                            </Link>
                        </Box>

                        <Box mx={1}>
                            <Link to={'/postagens'} className="text-decorator-none">
                                <Typography variant="h6" className="fontenav">
                                    Postagens
                                </Typography>
                            </Link>
                        </Box>
                        <Box mx={1}>
                            <Link to={'/temas'} className="text-decorator-none">
                                <Typography variant="h6" className="fontenav">
                                    Temas
                                </Typography>
                            </Link>
                        </Box>
                        <Box mx={1}>
                            <Link to={'/formularioTema'} className="text-decorator-none">
                                <Typography variant="h6" className="fontenav">
                                    Cadastrar Tema
                                </Typography>
                            </Link>
                        </Box>
                        <Box mx={1} onClick={gologout}>
                            <LogoutIcon className="icons fontenav"></LogoutIcon>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}
export default Navbar;