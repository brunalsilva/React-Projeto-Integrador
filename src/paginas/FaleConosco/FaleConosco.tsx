import emailjs from "emailjs-com";
import './FaleConosco.css';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import React, { useState, useEffect, ChangeEvent } from 'react';

export default function FaleConosco() {

     function sendEmail(e: any): void {
          e.preventDefault();
          emailjs.sendForm('DandaraGmail', 'DandaraTemplate', e.target, 'user_fznK95vdp57aJoomPqOBT').then((result) => { alert("Mensagem enviada com sucesso."); }, (error) => { alert(error.message) });
          e.target.reset()
     }
     return (
          <>
               <Grid alignItems="center" item xs={12}>
                    <Box padding={10} display="flex" alignItems="center" justifyContent="center">
                         <Box className='box-fundo-opaca-login'>
                              <div className='box-outside-contato'>
                                   <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='header'>Entre em contato conosco</Typography>
                                   <form onSubmit={sendEmail}>
                                        <div>
                                             <div>
                                                  <TextField id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                                             </div>
                                             <div >
                                                  <TextField id='e-mail' label='e-mail' variant='outlined' name='e-mail' margin='normal' fullWidth />
                                             </div>
                                             <div>
                                                  <textarea required placeholder="mensagem" name="message" className='form-contato-mensagem'></textarea >
                                             </div>
                                             <Box display='flex' justifyContent='center'>
                                                  <Button type='submit' variant='contained' color='primary'>
                                                       Enviar
                                                  </Button>
                                             </Box>
                                        </div>
                                   </form>
                              </div>
                         </Box>
                    </Box>
               </Grid>
          </>
     )
}