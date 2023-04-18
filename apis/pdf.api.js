const { createPdf } = require('../services/pdf.service');

const router = require('express').Router();


router.get('/pdf', createPdf)



module.exports = router