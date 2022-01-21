import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1' display='flex'>
                            <Box className='box3'>
                                <Box className='boxLinks' display="flex" alignItems="center" justifyContent="left">
                                    <Typography variant="h5" align="center" gutterBottom className='texto1'>Por que Dandara?</Typography>
                                </Box>
                                <Box className='boxLinks' display="flex" alignItems="center" justifyContent="left">
                                    <Typography variant="h5" align="center" gutterBottom className='texto1'>Sobre nós</Typography>
                                </Box>
                                <Box className='boxLinks' display="flex" alignItems="center" justifyContent="left">
                                    <Typography variant="h5" align="center" gutterBottom className='texto1'>Fale conosco</Typography>
                                </Box>
                            </Box>
                            <Box className='logoFooter'>
                                <img src="./logo.png" alt="logo dandara" className='logoDandaraFooter'/>
                            </Box>
                    </Box>
                    <Box className='box2'>
                        <Box>
                            <Typography variant="subtitle2" align="center" gutterBottom className='texto2' >© 2022 Copyright: Dandara</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;