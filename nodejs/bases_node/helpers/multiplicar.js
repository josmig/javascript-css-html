//file system
const fs = require('fs');

const crearOperacion = async (base = 8) => {

    try {
        console.log('=================');
        console.log(`  TABLA del ${base}  `);
        console.log('=================');

        let salida = '';

        for (let i = 1; i <= 12; i++) {
            salida += `${base} * ${i} = ${base * i}\n`;
        }
        console.log(salida);
        fs.writeFileSync(`Tabla-${base}.txt`, salida);
        return `Tabla-${base}.txt CREADA!`;

        /* fs.writeFile(`Tabla-${base}.txt`, salida, (err)=>{
            if(err) throw err;
            console.log(`Tabla-${base}.txt CREADO CTMR!!`);
        }) */
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    crearArchivo: crearOperacion
}