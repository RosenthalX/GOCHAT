
usuarios = [];
maestros = [];
grupos = [];


function generarGrupo(maestro,usuario,solicitud){
    maestros.push({maestro:maestro,usuario:usuario,solicitud:solicitud})
};

setInterval(()=>{
  usuarios.forEach((usuario)=>{
        if(!usuario.atendido){
            isExist = false;
            maestros.forEach((maestro)=>{
                if(usuario.datos.solicitud == maestro.datos.solicitud){
                    if(maestro.atendiendo){
                        isExist = true;
                    }
                }
            });
            if(isExist) console.log("Hay un maestro disponible para atender su solicitud.") 
                else console.log("No hay maestros que atiendan esta solicitud");
        }//fin de if
  });
},5000);
 

module.exports.getMaestros = function(){
    return maestros;
}

module.exports.getGrupos = function(){
    return grupos;
}

module.exports.getUsuarios = function(){
    return usuarios;
}

module.exports.nuevoUsuario = function(socket,datos){
    console.log("Llego nuevo usuario "+datos.de);
    usuarios.push({id:0,nombre:datos.de,socket:socket,atendido:false,datos:datos});
}


module.exports.nuevoMaestro = function(socket,datos){
    console.log("Llego nuevo maestro "+datos.de);
    maestros.push({id:0,nombre:datos.de,socket:socket,atendiendo:true,datos:datos});
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

