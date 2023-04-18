import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
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
                            <Link to={'/home'}>
                                <Typography variant="h6" className="fontenav">
                                    Home
                                </Typography>
                            </Link>
                        </Box>

                        <Box mx={1}>
                            <Link to={'/postagens'}>
                                <Typography variant="h6" className="fontenav">
                                    Postagens
                                </Typography>
                            </Link>
                        </Box>
                        <Box mx={1}>
                        <Link to={'/temas'}>
                            <Typography variant="h6" className="fontenav">
                                Temas
                            </Typography>
                            </Link>
                        </Box>
                        <Box mx={1}>
                        <Link to={'/temas'}>
                            <Typography variant="h6" className="fontenav">
                                Cadastrar Tema
                            </Typography>
                            </Link>
                        </Box>
                        <Box mx={1}>
                            <Link to={'/login'}>
                            <LogoutIcon className="icons fontenav"></LogoutIcon>
                            </Link>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}
export default Navbar;