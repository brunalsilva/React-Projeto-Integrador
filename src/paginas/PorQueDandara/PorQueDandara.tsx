import React from 'react';
import { Typography, Box, Grid } from '@material-ui/core';
import './PorQueDandara.css';

function PorQueDandara() {
    return (
        <>
            <Grid alignItems="center" item xs={12}>
                <Box padding={10} display="flex" alignItems="center" justifyContent="center">
                    <div>
                        <Box width= '600px' className='box-fundo-opaca'>
                            <Typography variant="h4" align="center" gutterBottom className='titulo-pqdandara'>Por que Dandara?</Typography>
                            <Typography variant='body1' align="left" gutterBottom className='texto-pqdandara'>Dandara dos Palmares foi uma mulher negra, mãe e guerreira. Ela lutou na Revolta dos Palmares e era casada com Zumbi dos Palmares. Dandara tinha habilidades com capoeira, planejava estratégias para proteger o quilombo e também participava das atividades corriqueiras da comunidade como a agricultura e o artesanato. Dandara foi e ainda é uma inspiração de força e resistência.
                                É importante conhecer e estudar sobre as mulheres que lutaram para que conseguíssemos o que temos hoje. Contudo, a luta contra o racismo e à favor da igualdade de gênero ainda não acabou. O legado que Dandara deixou nos inspirou a dedicar seu nome ao e-commerce, já que o objetivo do site é oferecer uma plataforma segura e confiável para mulheres empreendedoras. Com isso, queremos que cada vez mais mulheres conquistem sua emancipação financeira e independência.
                            </Typography>
                            <Typography variant='body1' align="center" gutterBottom className='text-decoration-none link-pqdandara texto-pqdandara'>
                                <a href="https://aventurasnahistoria.uol.com.br/noticias/reportagem/historia-dandara-dos-palmares-o-maior-ato-de-resistencia-contra-o-regime-escravocrata.phtml" target="_blank" className='text-decoration-none link-pqdandara texto-pqdandara' > Saiba mais sobre a Dandara dos Palmares</a>
                            </Typography>
                        </Box>
                    </div>
                </Box>
            </Grid>
        </>
    )
}

export default PorQueDandara;