var express = require("express");
var http = require("http");
var app = express()(http);
var io = require("socket.io")(http)


app.listen(2000,()=>{
    console.log("Escuchando al puerto 3000");
});