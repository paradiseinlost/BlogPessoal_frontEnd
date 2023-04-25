import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/Actions';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function gologout() {
        dispatch(addToken(''));
        alert("Usuario foi Deslogado !")
        navigate('/login')
    }


    var navbarComponent;
    if (token != "") {

        navbarComponent = <AppBar position="static" className="appBar">
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
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}
export default Navbar;