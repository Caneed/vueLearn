const express = require('express')
const port = 3000
const mongoose = require('mongoose')
const app = express()
const listRouter=require('./routers/listRouter')

//middle ware
app.use(express.json())
app.use(express.urlencoded())
//static res
app.use('/public', express.static(`${__dirname}/public`))

app.use('/',listRouter)

app.get('/',(req, res)=>{
    res.location('/public/html/index.html')
    res.sendStatus(302)
})
app.listen(port, () => {
    //database connect
    mongoose.connect('mongodb://127.0.0.1:27017/test').then(res => {
        console.log('server is listening on ' + port)
    })
})


