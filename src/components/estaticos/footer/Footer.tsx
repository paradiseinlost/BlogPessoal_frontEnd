import { Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import './Footer.css';
import React from "react";

function Footer() {
    return (
        <>
            <Grid container className="footer">
                <Grid alignItems="center" item xs={12}>
                    <Box className="box">
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}className="fontefo">Confira minhas redes sociais</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="mailto:scardoso.thais@gmail.com" target="_blank">
                                <EmailIcon style={{ fontSize: 40, color: "white" }} />
                            </a>
                            <a href="https://github.com/paradiseinlost" target="_blank">
                                <GitHubIcon style={{ fontSize: 40, color: "white" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/thais-silva-cardoso/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 40, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box className="box2">
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }}className="fontefo" >© 2023 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center"className="fontefo">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </>
    )
}
export default Footer;