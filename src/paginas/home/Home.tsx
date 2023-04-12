import React from "react";
import './Home.css';
import { Grid, Typography, Button } from "@material-ui/core";
import { Box } from "@mui/material";

function Home() {
    return (

        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "d27474" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#D84455B5", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.pinimg.com/474x/61/c8/ad/61c8adb6d32d7b8c92de4f4280e4b415.jpg" alt="" width="400px" height="500px" className="img" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>

    )
}

export default Home;