const { userModel } = require("../modules/user.module")
var XLSX = require("xlsx");

module.exports.addUser = async (req, res) => {
    const workbook = XLSX.readFile(req.file.path)
    const sheet = workbook.Sheets[workbook.SheetNames[0]]
    let data = XLSX.utils.sheet_to_json(sheet)
    let users = await userModel.insertMany(data)
    res.json({ message: "success", users })
}

module.exports.getUsers = async (req, res) => {
    let users = await userModel.find({})
    res.json({ message: "success", users })
}