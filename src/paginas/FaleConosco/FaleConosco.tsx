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
               <Grid container direction='row' justifyContent='center' alignItems='center'>
                    <Grid alignItems='center' xs={6}>
                         <Box className='box-fundo-opaca'>
                              <div>
                                   <h2>Contato</h2>
                                   <form onSubmit={sendEmail}>
                                        <div>
                                             <div>
                                                  <label>Nome</label>
                                                  <input type="text" autoFocus className="form-control" required placeholder="Nome" name="name" />
                                             </div>
                                             <div >
                                                  <label>Email</label>
                                                  <input type="email" required placeholder="Seu email" name="email" />
                                             </div>
                                             <div>
                                                  <label>Mensagem</label>
                                                  <textarea required placeholder="Sua mensagem" name="message"></textarea>
                                             </div>
                                             <div>
                                                  <input type="submit" value="Enviar mensagem"></input>
                                             </div>
                                        </div>
                                   </form>
                              </div>
                         </Box>
                    </Grid>
               </Grid>
          </>
     )
}