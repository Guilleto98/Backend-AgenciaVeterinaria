import nodemailer from 'nodemailer';

const emailOlvidePassword = async(datos)=>{
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        }
      });
      
      
      const {email, nombre, token} = datos;

      //Enviar email
      const info = await transporter.sendMail({
        from: "APV - Administrador de Pacientes de Veterinaria",
        to: email,
        subject: "Reestablece tu password",
        text: "Reestablece tu password",
        html: `<p>Hola! ${nombre}, has solicitado resetear tu password.</p>
              <p>Sigue al siguiente enlace para generar un nuevo password <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a></p>
              <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>`

      });

      console.log("Mensaje enviado: %s", info.messageId)

}

export default emailOlvidePassword;