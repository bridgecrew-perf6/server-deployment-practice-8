'use strict';

const express = require('express');
const stamper=require('../middlewares/stamper');
const notFoundHandeler=require('../handlers/404');
const errorHandeler=require('../handlers/500');

const app =express();

app.get("/",(req,res)=>{
    res.status(200).send('helo ');
});
app.get("/data",(req,res) =>{
res.json({

    id: 1,
    name:'islam rwashdeh',
    email :'islamrwashdeh@yahoo.com'
   });
});


//to test the midilware
app.get('/test',stamper,(req,res) =>{
    res.json({
    id: 2,
    name:'test',
    email :'test@yahoo.com',
    time:req.timeStamp
});
});

app.get('/bad', (req, res) => {
    let num = 10;
    let result = num.forEach((x) => {
        console.log(x);
    });
    res.status(500).send(result);
})

app.use('*',notFoundHandeler);
app.use(errorHandeler);



function start(port){
    app.listen(port,() => {
         console.log(`im listening on port ${port}`);
    })
}

module.exports ={
    app: app,
    start: start,
}