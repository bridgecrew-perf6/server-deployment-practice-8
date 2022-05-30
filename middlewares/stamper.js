
'use strict'
module.exports=(req, res, next)=> {
    req.timeStamp =new Date();
    next();//its mean  go to next functon 
   
}