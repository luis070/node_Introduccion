
const { log } = require('console');
const { prueba } = require('./helpers/multiplicar');
const { number, option, boolean } = require('yargs');
const { arch } = require('os');
const argv = require('./config/yargs')


console.clear();


// console.log(process.argv);
// console.log(argv);

// console.log('base: yards aa joto', argv.base);

// console.log( '======================' );
// console.log( '  Tabla del: 5');
// console.log( '======================' );

// const num = 3
// const [a ,b ,c,] = process.argv;
// const [, base = 5 ] =  c.split('=')
// let salida = ''

// for (let index = 1; index <= 10; index++) {
//     salida += `${num} x ${index} = ${num * index}\n`;    
// }

// // console.log(salida);
// fs.writeFile('tabla-5.txt',salida , () =>
// {
//     if (err) throw(err);

//     console.log('tabla-5 creada');
// }
// )
// console.log(process.argv );
// console.log(arg);


// console.log(a);
// console.log(b);
// console.log(c);

// console.log(base);

//cambie el cmapo de base por usar argv de la prueba de insertar por terminar 
prueba(argv.b,argv.h,argv.l)
.then(nombreArchivo => console.log(nombreArchivo,'creado'))
.catch(err => console.log(err))