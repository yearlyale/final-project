/**
* 
* @author Danos
* @description Sixth Assignment | Listener
*/

const sixthAssignmentListener = (req, res) => {
    const fetch = require('node-fetch');
    const fs = require('fs');

    // Settings
    let nombreArchivo;
    let contenidoArchivo = '';

    const main = () => {
        console.log('\n| Sixth Assignment |\nEstoy listo para escuchar...');
        escucharCuento();
    };

    let escucharCuento = async () => {
        let data = null;
        const res = await fetch('http://localhost:3000/sixth-assignment/reader')
            .then(async response => data = await response.json())
            .then(() => {
                for (let linea of data._lines) {
                    guardarArchivo(linea);
                    console.log(linea);
                }
            }).catch(error => console.log('Esperando al Lector.'));
    }

    let guardarArchivo = (contenido) => {
        if (contenidoArchivo == '') {
            nombreArchivo = contenido + '.txt';
            comprobarSiExisteArchivo(nombreArchivo);
            console.log('Archivo creado!\n')
        }
        contenidoArchivo = contenidoArchivo + '\n' + contenido;
        fs.writeFileSync(nombreArchivo, contenidoArchivo, err => { if (err) console.log(err) })
    };

    let comprobarSiExisteArchivo = (file) => {
        try {
            fs.unlinkSync(file);
            console.log('Archivo eliminado...\n');
        } catch (e) {
            console.log('Comenzando...\n');
        }
    };

    main();
};

module.exports = sixthAssignmentListener;