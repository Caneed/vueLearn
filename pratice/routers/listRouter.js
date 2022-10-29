const express = require('express')
const router = express.Router()
const listController=require('../controller/controller')
const {list} = require("../controller/controller");


//列表接口
router.post('/list',listController.list)

router.post('/add',listController.add)

router.post('/delete',listController.delete)

router.post('/update',listController.update)
router.post('/search',listController.search)


module.exports=router