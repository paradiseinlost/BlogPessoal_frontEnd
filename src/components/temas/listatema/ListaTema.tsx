import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './ListaTema.css';
import Tema from '../../../models/Tema';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function ListaTema() {

    const [temas, setTemas] = useState<Tema[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    let navigate = useNavigate();

    useEffect(() => {
        if (token == '') {
            alert('Você precisa estar logado !')
            navigate("/login")
        }
    }, [token])

    async function getTema() {

        await busca('/temas', setTemas, {
            headers: {
                'Authorization': token
            }
        })

    }

    useEffect(() => {
        getTema()
    }, [temas.length])


    return (
        <>
            {
                temas.map(tema => (
                    <Grid container direction='column'>
                    <Box m={2} >
                        <Card variant="outlined" className='colorcard'>
                            <CardContent className='fontecard'>
                                <Typography gutterBottom>
                                    Tema
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {tema.descricao}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5} >

                                    <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft fonteposta" size='small' >
                                                Atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' className='fonteposta'>
                                                Deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                    </Grid>
                ))}
                
        </>
    );
}


export default ListaTema;