const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get('/twitter',(req,res)=>{
res.sendFile(__dirname+"/index.html")
})
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/form.html")
})


app.post('/',(req,res)=>{
    console.log(req.body)
    res.send('posted')
})
app.listen(3000,()=>console.log('listening on port 3000'))