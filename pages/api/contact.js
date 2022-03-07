// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function (req, res) {
  let nodemailer = require('nodemailer')
  require('dotenv').config()
  const transporter = nodemailer.createTransport({
      port: 587,
      host: "ssl0.ovh.net",
      auth: {
        user: 'contact@hdf-enr.fr',
        pass: process.env.MAIL_PASS,
      },
      secure: false,
    })  

    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
          if (error) {
              console.log(error);
              reject(error);
          } else {
              console.log("Server is ready to take our messages");
              resolve(success);
          }
      });
  });

    let mailData
        mailData = {
            from: 'contact@hdf-enr.fr',
            to: "contact@hdf-enr.fr",
            subject: `Nouveau message de ${req.body.nom} !`,
            text: `
            ######################
            Information Client
            ######################\n
            Nom : ${req.body.nom}
            Email : ${req.body.email}
            Tel : ${req.body.phone}\n
            ######################
            MESSAGE
            ######################\n
            ${req.body.msg}\n
            ######################
            `,
           }
  
           await new Promise((resolve, reject) => {

            transporter.sendMail(mailData, function (err, info) {
              if (err) {
                console.error(err);
                res.status(400).send(`${req.body.nom}, une erreur c'est produite, veuillez recommencer ulterieurement`)
                reject(err);
            } else {
                console.log(info);
                resolve(info);
            }
           })
          })
            res.status(200).send(`Merci ${req.body.nom}, nous vous répondrons dans les plus brefs delais`)
          console.log(req.body)
     
}