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
                                                  <input type="text" autoFocus className="form-control form-contato" required placeholder="Nome" name="name"/>
                                             </div>
                                             <div >
                                                  <input type="email" required placeholder="Seu email" name="email" className='form-contato'/>
                                             </div>
                                             <div>
                                                  <textarea required placeholder="mensagem" name="message" className='form-contato-mensagem form-control'></textarea >
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