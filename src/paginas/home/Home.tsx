import React, { useEffect } from "react";
import './Home.css';
import { Grid, Typography, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import { Link, useNavigate } from "react-router-dom";
import { TokenState } from "../../store/tokens/tokensReducer";
import { useSelector } from "react-redux";


function Home() {

    let navigate = useNavigate();

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );


    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])


    return (

        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#E9967AF5" }}>
                <Grid alignItems="center" item xs={12} style={{ backgroundImage: "url(/public/img/friends.jpeg)" }}>
                    <Box paddingX={20} paddingY={30} className='fotohome'>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        < ModalPostagem />
                        <Link to='/postagens'>
                            <Box marginBottom={5}>
                                <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#a03145", color: "lavender" }}>Ver Postagens</Button>
                            </Box>
                        </Link>
                    </Box>
                </Grid>
                <Grid xs={12} className="postagens">
                    <TabPostagem />
                </Grid>

            </Grid>
        </>

    )
}

export default Home;


