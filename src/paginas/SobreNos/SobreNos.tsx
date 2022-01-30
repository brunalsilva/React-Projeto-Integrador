import React from 'react';
import { Typography, Box, Grid } from '@material-ui/core';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './SobreNos.css';

function SobreNos() {
    return (
        <Grid container alignItems="center" item xs={12}>
            <Grid container justifyContent='center' alignItems="center" item xs={12}>
                <Typography className='titulo-sobrenos'>Conheça a nossa equipe de desenvolvimento
                </Typography>
            </Grid> 
            <Box display="flex" marginTop={6}>
                <Box padding={1} paddingLeft={2} display="flex" alignItems="center" justifyContent="space-evenly">
                    <Box display="flex" alignItems="center" justifyContent="center" className='box-fundo-opaca-sobrenos'>
                        <Box display="flex" alignItems="center" flexDirection="column">
                            <Typography className="nome" component="div" noWrap >Bruna Silva</Typography>
                            <Box className='foto-bruna foto'></Box>
                            <Box>
                                <a href="https://github.com/brunalsilva" target="_blank">
                                    <GitHubIcon className='icon' />
                                </a>
                                <a href="https://www.linkedin.com/in/bruna-silva-671402224/" target="_blank">
                                    <LinkedInIcon className='icon' />
                                </a>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box padding={1} display="flex" alignItems="center" justifyContent="space-evenly">
                    <Box display="flex" alignItems="center" justifyContent="center" className='box-fundo-opaca-sobrenos'>
                        <Box display="flex" alignItems="center" flexDirection="column">
                            <Typography className="nome" component="div" noWrap >Eduardo Sousa</Typography>
                            <Box className='foto-eduardo foto'></Box>
                            <Box>
                                <a href="https://github.com/Edu-sousa" target="_blank">
                                    <GitHubIcon className='icon' />
                                </a>
                                <a href="https://www.linkedin.com/in/eduardo-sousa-519518185/" target="_blank">
                                    <LinkedInIcon className='icon' />
                                </a>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box padding={1} display="flex" alignItems="center" justifyContent="space-evenly">
                    <Box display="flex" alignItems="center" justifyContent="center" className='box-fundo-opaca-sobrenos'>
                        <Box display="flex" alignItems="center" flexDirection="column">
                            <Typography className="nome" component="div" noWrap >Kayque Gonçalves</Typography>
                            <Box className='foto-kayque foto'></Box>
                            <Box>
                                <a href="https://github.com/kayqueG" target="_blank">
                                    <GitHubIcon className='icon' />
                                </a>
                                <a href="https://www.linkedin.com/in/kayque-gon%C3%A7alves/" target="_blank">
                                    <LinkedInIcon className='icon' />
                                </a>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box padding={1} display="flex" alignItems="center" justifyContent="space-evenly">
                    <Box display="flex" alignItems="center" justifyContent="center" className='box-fundo-opaca-sobrenos'>
                        <Box display="flex" alignItems="center" flexDirection="column">
                            <Typography className="nome" component="div" noWrap >Larissa Silva</Typography>
                            <Box className='foto-larissa foto'></Box>
                            <Box>
                                <a href="https://github.com/devlarissa" target="_blank">
                                    <GitHubIcon className='icon' />
                                </a>
                                <a href="https://www.linkedin.com/in/devlarissa/" target="_blank">
                                    <LinkedInIcon className='icon' />
                                </a>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box padding={1} display="flex" alignItems="center" justifyContent="space-evenly">
                    <Box display="flex" alignItems="center" justifyContent="center" className='box-fundo-opaca-sobrenos'>
                        <Box display="flex" alignItems="center" flexDirection="column">
                            <Typography className="nome" component="div" noWrap >Marcela Almeida</Typography>
                            <Box className='foto-marcela foto'></Box>
                            <Box>
                                <a href="https://github.com/almeidamarcelah" target="_blank">
                                    <GitHubIcon className='icon' />
                                </a>
                                <a href="https://www.linkedin.com/in/marcela-almeida-094291175/" target="_blank">
                                    <LinkedInIcon className='icon' />
                                </a>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Grid>
    )
}

export default SobreNos;