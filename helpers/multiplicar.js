const fs = require('fs');
const colors = require('colors');


const crearArchivo = (base = 5, hasta =10,listar = false ) => {


return new Promise((resolve, reject) => {

    
    
console.log( '======================'.red );
console.log( `  Tabla del: ${base}`);
console.log( '======================'.red );

let salida = ''

for (let index = 1; index <= hasta; index++) {
    salida += `${base} x ${index} = ${base * index}\n`;    
}

if (listar===true) {    
console.log(salida);
}
fs.writeFileSync(`./salida/tabla-${base}.txt`,salida );

    // console.log(`tabla-${base}.txt creada`);
resolve (`./salida/tabla-${base}.txt `);

// ------------------------------------------esta parte esta mal 
// console.log( '======================' );
// console.log( '  Tabla del: 5');
// console.log( '======================' );

// let salida = ''

// for (let index = 1; index <= 10; index++) {
//     salida += `${base} x ${index} = ${base * index}\n`;    
// }

// console.log(salida);
// fs.writeFileSync(`tabla-${base}.txt`,salida , () =>
// {
//     if (err) throw(err);

//     // console.log(`tabla-${base}.txt creada`);
//     return `tabla-${base}.txt creada`
// }
// )
// } catch (error) {
//     throw error
// }
})
}


const crearArchivo2 = async (base = 5,listar = false) => {
    try {
        
console.log( '======================'.blue );
console.log( '  Tabla del: 5');
console.log( '======================'.blue );

let salida = ''

for (let index = 1; index <= 10; index++) {
    salida += `${base} x ${index} = ${base * index}\n`;    
}
if (listar===true) {    
console.log(salida);
}

fs.writeFileSync(`./salida/tabla-${base}.txt`,salida );

    // console.log(`tabla-${base}.txt creada`);
return `tabla-${base}.txt `;
    } catch (error) {
        throw error
        
    }

}

module.exports = {
    prueba: crearArchivo
}