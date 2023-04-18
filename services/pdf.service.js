var pdf = require("pdf-creator-node");
var fs = require("fs");
const path = require("path");
const { options } = require("../utils/option");
const { userModel } = require("../modules/user.module");
const { sendEmail } = require("../utils/sendEmail");

module.exports.createPdf = async (req, res) => {
    const users=await userModel.find({}).lean()
    var html = fs.readFileSync(path.join(__dirname, "../template/pdf.html"), "utf8");
    let fileName = "ahmed.pdf";
    var document = {
        html: html,
        data: {users},
        path: "./docs/" + fileName,
    };
    let filePath=`http://localhost:3000/${fileName}`
    pdf.create(document, options)
        .then((result) => {
            sendEmail({fileName,filePath})
            console.log(result);
            res.send(`<a download href='${filePath}'>DownLoad</a>`)
        })
        .catch((error) => {
            console.error(error);
        });
}