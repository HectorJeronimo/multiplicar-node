//Requireds
//3 tipos de required
//const fs = require('fs'); // paquetes propios de node 
//const fs = required('express');//paquetes que se instalan y que posteriormente se usan (expansiones)
//const fs = required('./fs');//archivos que nosotros creamos
//console.log(module); //este es un objeto global
//console.log(process.argv);//este es otro objeto global

/*
comando npm init 
te hace unas preguntas y crea un package json
este archivo contiene informacion de las dependencias que necesita nuestra app
contiene otra metadata
te pide nombre del paquete, version, descripcion(dar una descripcion de lo que hace el paquete o la app),
entry point(primer codijo que se ejecuta)

ejecutar npm i yargs --save
ejecutar npm 
*/
const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: ', `${archivo}`.green))
            .catch(error => {
                console.log(error);
            });
        break;
    default:
        console.log('Comando no reconocido');
        break;

}


//let parametro = argv[2];
//let base = parametro.split('=')[1];