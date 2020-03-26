
var usuarios = [];
var maestros = [];
var grupos = [];


function generarGrupo(mast,datos2){
    maestros.push({socket:mast,nombre:datos2.de,tipo:datos2.tipo});
}

module.exports.nuevoUsuario = function(socket,datos){
    console.log("Llego nuevo usuario "+datos.de);
}


module.exports.nuevoMaestro = function(socket,datos){
    console.log("Llego nuevo usuario "+datos.de);
}

module.exports.eliminarMaestro = function(socket){eliminarMaster(socket);}

function eliminarMaster(socket){
    masters = [];

    maestros.forEach(element => {
     if(element.socket != socket){
        masters.push(element);
     }    
    });
    maestros = masters;
}//

