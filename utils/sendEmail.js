const nodemailer = require("nodemailer");


module.exports.sendEmail=async(options)=>{

    let transporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
          user: "ahmedabdelghny5@gmail.com", // generated ethereal user
          pass: 'hosjcmoyrbrcbtif', // generated ethereal password
        },
      });
      let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <ahmedabdelghny5@gmail.com>', // sender address
        to: "ahmedabdelghny5@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        html: "<b>Hello world?</b>", // html body
        attachments:[{
            path: options.filePath,
            filename: options.fileName,
            contentType:"application/pdf"
        }]
      });
}