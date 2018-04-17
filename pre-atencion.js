const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods" , "POST, GET, PUT, DELETE, OPTIONS")
     next()
})

app.use(express.static(path.join(__dirname, "./")));

try{
    app.listen(8004, () => {
        console.log('ONLINE PORT :: \x1b[43m%s\x1b[0m' , 8004 )
    })
}catch( ex ){
    console.log( "Err >> " + ex )
}