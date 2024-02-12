

const argv = require('yargs')
    .option('b',{
        alias:'base',
        type:'number',
        demandOption: true,
        describe: 'es la base de la tabla de multiplicar',
    })    
    .option('h',{
        alias:'hasta',
        type:'number',
        default: 10,
        describe: 'es hasta donde puede llegar la tabla de multiplicar',
    })
    .option('l',{
        alias:'listar',
        type: 'boolean',
        default: false,
        describe: 'muestra la tabla en consola',
    })
    .check( (argv,option) => {
        // console.log('yargs', argv);
        if (isNaN(argv.b)) {
            throw 'la base tiene que ser un numero'
        }
        return true
    })
    .argv

    module.exports = argv;
