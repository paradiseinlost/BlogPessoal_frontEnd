import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './ListaPostagem.css';
import { busca } from '../../../services/Service';
import Postagem from '../../../models/Postagem';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';


function ListaPostagem() {

    const [posts, setPosts] = useState<Postagem[]>([])

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

    async function getPostagens() {
        await busca('/postagens', setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getPostagens()

    }, [posts.length])



    return (
        <>
            {
                posts.map(post => (
                    <Grid container direction="row" alignItems="center">
                        <Box m={2} style={{ backgroundColor: "#E9967AF5", }}>
                            <Card variant="outlined" className='colorcard'>
                                <CardContent className='fontecard'>
                                    <Typography gutterBottom>
                                        Postagens
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        {post.titulo}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {post.texto}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {post.tema?.descricao}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Box display="flex" justifyContent="center" mb={1.5}>

                                        <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                                            <Box mx={1}>
                                                <Button variant="contained" className="marginLeft fonteposta" size='small' >
                                                    atualizar
                                                </Button>
                                            </Box>
                                        </Link>
                                        <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                                            <Box mx={1}>
                                                <Button variant="contained" size='small' className='fonteposta'>
                                                    deletar
                                                </Button>
                                            </Box>
                                        </Link>
                                    </Box>
                                </CardActions>
                            </Card>
                        </Box>
                    </Grid>
                ))
            }
        </>
    )
}

export default ListaPostagem;