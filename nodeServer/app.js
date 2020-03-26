var express = require("express");
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http,{ origins: '*:*'});
const port = 80;
var cors = require("cors");
app.use(cors());

var bodega = require("./procesamientos");

app.use("/maestros", (req, res)=>{
    grupos = bodega.getMaestros();
    data = [];
    grupos.forEach((grupo)=>{
        data.push({nombre:grupo.nombre,id:grupo.id})
    });
    if(grupos.length > 0)
    res.status(200).send("Existen : "+grupos.length+" maestros.<br>"+JSON.stringify(data));
    else
    res.status(200).send("No hay maestros");
})

app.use("/grupos",(req,res)=>{
    grupos = bodega.getGrupos();
    arr = []
    grupos.forEach((grupo)=>{
        arr.push({id:grupo.id});
    });

    if(grupos.length > 0)
    res.status(200).send("Existen : "+grupos.length+" grupos.<br>"+JSON.stringify(arr));
    else
    res.status(200).send("No hay grupos");
});

app.use("/usuarios",(req,res)=>{
    grupos = bodega.getUsuarios();
    if(grupos.length > 0)
    res.status(200).send("Existen : "+grupos.length+" usuarios.");
    else
    res.status(200).send("No hay usuarios");
});

app.use("/disponibles",(req,res)=>{
    if(grupos.length > 0)
    res.status(200).send(";D");
    else
    res.status(200).send("No hay grupos disponibles");
})

app.use("*",(req,res)=>{
    res.status(200).send("<h1>Sistema de chats funcional en este puerto.</h1><h3>Requerido app.</h3>");
});



io.on("connection",(socket)=>{
    socket.on("message",(datos)=>{
        if(datos.tipo == 5)
            bodega.nuevoUsuario(socket,datos);
        else if(datos.tipo == 6)
            bodega.nuevoMaestro(socket,datos);
        else
            bodega.procesarMensaje(socket,datos);
    });

    socket.on("disconnect",()=>{
        console.log("Se ah desconectado un usuario");
        bodega.Disconect(socket);
    });

})


http.listen(port,()=>{
    console.log("Escuchando al puerto "+port);
});