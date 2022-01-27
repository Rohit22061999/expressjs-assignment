const express = require('express');
const PORT = 8899
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("/" ,(req,res)=>{
    res.sendFile('form.html' ,{root:'.'})
})

app.post("/submit-data" ,(req,res)=>{
    res.send(`Name is ${req.body.name} and suggestion is ${req.body.suggest}`)
})

app.get("/categorydata/:cname([a-z]+)",(req,res)=>{
    let cn = req.params.cname;
    res.send(`the category is ${cn}`)
})
app.get("/category/:cname/:scat?",(req,res)=>{
    let cn = req.params.cname;
    let scn = req.params.scat;
    if (scn!=undefined){
    res.send(`the category is ${cn} and subcat is ${scn}`)
    }
    else{
        res.send(`the category is ${cn} rohit`)

        }
})
app.get('*',(req,res)=>{
    res.send("invalid URL")
})


app.listen(PORT,(err)=>{
    if(err) throw err ;
    console.log(`work on ${PORT}`)
})