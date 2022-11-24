const express = require('express')

const app=express()

const port=5000

app.get('/student',(req,res)=>{
    res.send({
        arr:[
            {name:'张三',age:20},
            {name:'李四',age:30},
            {name:'王五',age:40}
        ]
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))