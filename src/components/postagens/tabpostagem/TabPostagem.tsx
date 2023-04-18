import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }
    return (
        <>
            <TabContext value={value}>
                <AppBar position="static">
                    <Tabs centered className='tabs' onChange={handleChange}>
                        <Tab label="Todas as postagens" value="1" />
                        <Tab label="Sobre-nós" value="2" />
                    </Tabs>
                </AppBar>
                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Typography variant="h5" gutterBottom component="h5" align="center" className="titulo">Sobre o Blog</Typography>
                    <Typography variant="body1" gutterBottom align="justify" className='fontText'>Olá a todos os amantes de séries e filmes!

Eu gostaria de convidar vocês a participar do meu blog pessoal sobre esses temas. Aqui, nós discutimos nossas séries favoritas, desde os clássicos como Friends, HIMYM, Supernatural e TBBT, até os mais recentes como The Crown. Além disso, também falamos sobre nossos filmes favoritos, como a saga Harry Potter, Senhor dos Anéis e Hobbit, os romances de Jane Austen, ficções científicas no espaço como Perdido em Marte, e a emocionante série de filmes da Marvel.

Este é um espaço para todos compartilharem suas opiniões, críticas e sugestões sobre as últimas tendências do mundo do entretenimento. Então, se você é um grande fã de séries e filmes, inscreva-se agora para se juntar à nossa comunidade e começar a participar da diversão!

                    </Typography>
                </TabPanel>
            </TabContext>
        </>
    );
}
export default TabPostagem;