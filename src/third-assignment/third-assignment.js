/**
 * 
 * @author danos
 * @description Third Assignment
 */

const thirdAssignment = () => {
    // Variables
    let secs = 5; // How many seconds do you want to wait to stop the process?
    let idCache = 0, idPrincipal = 0;
    let cache = [[idCache, 1234, 0000, 4321]], principal = [[idPrincipal, 0000, 1010, 1234]];

    // Configuration - Main Execution
    const main = () => {
        console.log('\n|Third Assignment |\nInitializing cache and principal memories...');
        printTables(cache, principal);
        fill();
        setTimeout(() => {
            printTables(cache, principal);
            console.log('Taking SS. \nFinishing process...')
        }, secs * 1000);
    };

    // Methods
    let createData = (min, max) => Math.floor((Math.random() * (max - min)) + min);

    let createRow = (tabla, id) => {
        let w = ++id;
        let x = createData(1000, 9999);
        let y = createData(1000, 9999);
        let z = createData(1000, 9999);
        let aux = [w, x, y, z];
        tabla.push(aux);
    };

    let fill = () => {
        setInterval(() => {
            createRow(cache, idCache);
            createRow(principal, idPrincipal);
        }, 500);
    };

    let printTables = (tabla1, tabla2) => {
        console.log(`\nCache:`);
        console.table(tabla1);
        console.log(`\nPrincipal Memory:`);
        console.table(tabla2);
    }

    main();
};

module.exports = thirdAssignment;