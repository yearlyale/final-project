/**
* 
* @author Danos
* @description Sixth Assignment | Reader
*/

const { StringDecoder } = require('string_decoder');

const sixthAssignmentReader = (req, res) => {
    const readline = require('line-by-line');
    const fs = require('fs');

    // Settings
    const NOMBRE_ARCHIVO = 'cuento.txt';

    // Listening Port
    const main = (req, res) => {
        console.log('Estoy listo para leer...');
        console.log('Comenzando Lectura!!');
        leerLineas();
        res.send(leerLineas());
    };

    let leerCuento = fs.readFileSync(`${__dirname}/${NOMBRE_ARCHIVO}`);

    let leerLineas = () => {
        return StringDecoder(leerCuento);
    };

    main();
};

module.exports = sixthAssignmentReader;