import React from "react";
import './Home.css';
import { Grid, Typography, Button } from "@material-ui/core";
import { Box } from "@mui/material";

function Home() {
    return (

        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#E9967AF5" }}>
                <Grid alignItems="center" item xs={12} style={{backgroundImage:"url(/public/img/friends.jpeg)"}}>
                    <Box paddingX={20} paddingY={30} className='fotohome'>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#D84455B5", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                
                
            </Grid>
        </>

    )
}

export default Home;