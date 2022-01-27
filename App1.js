 const express = require('express')
 const fs = require('fs')
 const PORT = 8866
 const app = express()
 app.use(express.json())
 app.use(express.urlencoded({extended:false}))

 app.get("/" ,(req,res)=>{
    res.sendFile('form1.html' ,{root:'.'})
})
app.post("/submit-data" ,(req,res)=>{
    res.send(`submit successfully`)
    let body = ''
    fs.write('Details.txt',{body},(err)=>{
        if (err) throw err;
        console.log('file saved')
    })
})
app.listen(PORT,(err)=>{
    if(err) throw err ;
    console.log(`work on ${PORT}`)
})