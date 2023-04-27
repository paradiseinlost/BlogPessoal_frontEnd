import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, CardActions, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import './DeletarPostagem.css'
import Postagem from "../../../models/Postagem";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { buscaId, deleteId } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

function DeletarPostagem() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [post, setPosts] = useState<Postagem>()
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate("/login")

        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/postagens/${id}`, setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    function sim() {
        navigate('/postagens')
        deleteId(`/postagens/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        toast.success('Postagem deletada com sucesso', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
    }

    function nao() {
        navigate('/postagens')
    }
    return (
        <>
            <Box m={2}>
                <Card variant="outlined" className="colorcard">
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography gutterBottom className="fontecard">
                                Deseja deletar a Postagem?
                            </Typography>
                            <Typography className="fontecard">
                                {post?.titulo}
                            </Typography>
                        </Box>

                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button onClick={sim} variant="contained" className="fontedel" size='large'>
                                    Sim
                                </Button>
                            </Box>
                            <Box>
                                <Button onClick={nao} variant="contained" size='large' className="fontedel">
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}
export default DeletarPostagem;