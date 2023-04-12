import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <AppBar position="static"className="appBar">
                <Toolbar variant="dense">
                    <Box>
                        <Typography variant="h5"className="fontenav">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box className="box-itens">
                        <Box mx={1}>
                            <Typography variant="h6" className="fontenav">
                                Home
                            </Typography>
                        </Box>
                        <Box mx={1}>
                            <Typography variant="h6" className="fontenav">
                                Postagens
                            </Typography>
                        </Box>
                        <Box mx={1}>
                            <Typography variant="h6" className="fontenav">
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={1}>
                            <Typography variant="h6" className="fontenav">
                                Cadastrar Tema
                            </Typography>
                        </Box>
                        <Box mx={1}>
                            <LogoutIcon className="icons"></LogoutIcon>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}
export default Navbar;