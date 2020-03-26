export class Message {
    tipo:number;
    datos:string;
    de:string;
    para:string;
    grupo:number;
    fecha:string;
    solicitud:number;


    constructor(obj?:any){
        this.tipo = (obj && obj.tipo) || 0;
        this.datos = (obj && obj.datos) || "";
        this.de = (obj && obj.de) || "";
        this.para =  (obj && obj.para) || "";
        this.grupo = (obj && obj.grupo) || 1;
        this.fecha = (obj && obj.fecha) || ""+new Date();
        this.solicitud = (obj && obj.solicitud) || 0;
    }//
}
