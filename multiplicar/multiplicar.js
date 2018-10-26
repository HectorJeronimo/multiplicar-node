const fs = require('fs'); // paquetes propios de node 
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }
        let data = "";
        for (let i = 1; i <= limite; i++) {
            data += `${base} X ${i} = ${base*i}\n`
        }
        fs.writeFile(`archivos/table-del-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`archivos/table-del-${base}.txt`);
            }
        });
    });

}

//ECMAScript 6 ya se puede inicializar parametros
let listarTabla = (base, limite = 10) => {

    console.log("===============".green);
    console.log(`Tabla del ${base}`.green);
    console.log("===============".green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} X ${i} = ${base * i}`);
    }
}

/* Declarar la funcion globalmente */

//ECMAScript 6
module.exports = {
    crearArchivo,
    listarTabla
}

/*module.exports = {
    crearArchivo: crearArchivo
}*/