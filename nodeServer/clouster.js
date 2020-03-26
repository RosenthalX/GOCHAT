const cluster = require("cluster");
const http = require("./app");
const numCPUs = require("os").cpus().length;
const port = 80;

if(cluster.isMaster){
    console.log(`Master ${process.pid} is running.`);
    for(let i=0;i<numCPUs;i++){
        cluster.fork();
    }//

    cluster.on("exit",(worker,code,signal)=>{
        console.log(`Worker die at process ${worker.process.pid}.`);
        cluster.fork();
    });
}else{
    http.listen(port,()=>{
        console.log("Escuchando al puerto "+port);
    });
    console.log(`Worker iniciado con proceso ${process.pid}.`)
}