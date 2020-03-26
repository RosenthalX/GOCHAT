
usuarios = [];
maestros = [];
grupos = [];
contadorGC = 0;
limiteGC = 5;


//TECNICAS DE GRUPOS
function generarGrupo(maestro,usuario,solicitud){
    const id = Date.now();
    grupos.push({maestro:maestro,usuario:usuario,solicitud:solicitud,id:id});
    maestro.socket.emit("GRUPOID",{message:id});
    usuario.socket.emit("GRUPOID",{message:id});
    console.log("Grupo creado id "+id);
};




function depurarGrupos(){
    grupos.forEach((grupo,index)=>{
       
    });
}



//INTERVALOS DE TIEMPO
setInterval(()=>{
  usuarios.forEach((usuario)=>{
        if(!usuario.atendido){
            isExist = false;
            maestros.forEach((maestro)=>{
                if(usuario.solicitud == maestro.solicitud){
                    if(maestro.atendiendo){
                        if(!usuario.atendido){
                            isExist = true;
                            generarGrupo(maestro,usuario,usuario.solicitud);
                            usuario.atendido=true;
                        }
                    }
                }
            });
            if(isExist) console.log("Hay un maestro disponible para atender su solicitud.") 
                else console.log("No hay maestros que atiendan esta solicitud");
        }//fin de if
  });
  contadorGC++;
  if(contadorGC >= limiteGC){

    //contadorGC = 0;
    //console.log("Depurando "+grupos.length+" grupos");
    //depurarGrupos();
  }//
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
    usuarios.push({id:0,nombre:datos.de,socket:socket,atendido:false,datos:datos,solicitud:datos.solicitud});
}










module.exports.nuevoMaestro = function(socket,datos){
    console.log("Llego nuevo maestro "+datos.de);
    maestros.push({id:0,nombre:datos.de,socket:socket,atendiendo:true,datos:datos,solicitud:datos.solicitud});
}







module.exports.Disconect = function(socket){

    grupos.forEach((grupo,i)=>{
        if(grupo.usuario.socket == socket || grupo.maestro.socket == socket){
            if(grupo.usuario.socket== socket){grupo.maestro.socket.emit("closeChat",{message:"Usuario se desconecto."});}
            if(grupo.maestro.socket== socket){grupo.usuario.atendido=false;grupo.usuario.socket.emit("closeChat",{message:"Maestro se desconecto."});}
            grupos.splice(i,1);
            console.log("Grupo eliminado y mensaje enviado");
        }
    });

    usuarios.forEach((usuario,index)=>{
        if(usuario.socket == socket){
            console.log("Se ah removido un tipo usuario");
            usuarios.splice(index,1);
        }//
    });

    maestros.forEach((maestro,index)=>{
        if(maestro.socket == socket){
            console.log("Se ah removido un tipo maestro en index "+index);
            maestros.splice(index,1);
        }//
    });

}//

function mensajeNormal(socket,datos){
    console.log("Enviando datos");
    console.log(datos);
    socket.emit("message",datos);
}//


module.exports.procesarMensaje = function(socket,datos){
    console.log(datos);
    grupos.forEach((grupo)=>{
        if(grupo.id == datos.grupo){
           if(grupo.usuario.socket == socket){
               mensajeNormal(grupo.maestro.socket,datos);
            }else{
                mensajeNormal(grupo.usuario.socket,datos);
            }; 
        }//
    });
}//
