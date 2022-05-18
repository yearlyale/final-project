/**
* 
* @author Danos
* @description Fifth Assignment
*/
const fifthAssignment = () => {
    let a = 'Arithmetic operations:';
    let b = 2, c = 3, d = 4;
    let e = c * d;
    let v = 'Another operations: ';
    let w = 5, x = 7, y = 9;
    let z = x + y;

    let firstCodeFragment = async () => { // We enter again to this function,
        console.log(a);
        console.log(`x + y = z: \n${x} + ${y} = ${z}\n`); // And it ends here, where the function become asynchronous...
        setTimeout(() => {
            console.log('setTime:');
            console.log(`c * d = e: \n${c} * ${d} = ${e}\n`);
        }, 2000);
        if (x < 20) {                   // The largest block of code starts here
            secondCodeFragment();       // And we enter to this function...
            x++;
            z = z + b;
            y = y + w;
        }
        console.log('First code ended...');
    };

    let secondCodeFragment = async () => { // Here we continue until the call to the another function...
        console.log(v);
        x = x + z;
        z = x + y;
        console.log(`x + y = z: \n${x} + ${y} = ${z}\n`);
        c = c + d;
        e = c * d;
        firstCodeFragment();            // ... Here!
        console.log(`c * d = e: \n${c} * ${d} = ${e}\n`);
        console.log('Second code ended...');
    };

    const main = () => {
        console.log('\n| Fifth Assignment |');
        firstCodeFragment();
        secondCodeFragment();
    };

    main();

    /**
     *  So, we can say that the largest block of code goes like this:
     *  
     *  if(x < 20) {
     *      secondCodeFragment({
     *          console.log(v);
     *          x = x + z;
     *          z = x + y;
     *          console.log(`x + y = z: \n${x} + ${y} = ${z}\n`);
     *          c = c + d;
     *          e = c * d;
     *          firstCodeFragment({
     *              console.log(a);
     *              console.log(`x + y = z: \n${x} + ${y} = ${z}\n`);
     *              ...
     *          });  
     *      });
     *  }
     */
};

module.exports = fifthAssignment;