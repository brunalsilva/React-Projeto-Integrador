import emailjs from "emailjs-com";
import './FaleConosco.css';

export default function FaleConosco() {

     function sendEmail(e: any): void {
          e.preventDefault();
          emailjs.sendForm('DandaraGmail', 'DandaraTemplate', e.target, 'user_fznK95vdp57aJoomPqOBT').then((result) => { alert("Mensagem enviada com sucesso."); }, (error) => { alert(error.message) });
          e.target.reset()
     }
     return (
          <>
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
          </>
     )
}