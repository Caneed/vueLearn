const express = require('express')

const app=express()

const port=5001

app.get('/cars',(req,res)=>{
    res.send({
        arr:[
            {name:'法拉利',age:20},
            {name:'宾利',age:30},
            {name:'路虎',age:40}
        ]
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))