const express = require('express');
const router = express.Router();
const path = require('path')
var multer  = require('multer')
var upload = multer().array('image')

router.post('/', (req, res) =>{
       console.log(req.files)
});


module.exports = router;