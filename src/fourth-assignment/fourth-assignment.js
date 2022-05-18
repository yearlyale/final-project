/**
 * 
 * @author danos
 * @description Fourth-Assignment
 */

const fourthAssignment = () => {
    // CONSTANTS AND VARIABLES
    const memorySize = 256;
    const memory = [];
    let totalSize = 0;

    // RUN SERVER
    const main = () => {
        console.log('\n| Fourth Assignment |\nInitalizating Memory...');
        initMemory();
        print();
        getProcesses();
    };

    // METHODS
    const initMemory = () => { for (let i = 0; i < 10; i++) createProcess(); };

    const createProcess = (called) => {
        let rowSize = createSize();
        let row = new Row(createDir(), createData(), rowSize);
        if ((totalSize + rowSize) < memorySize / 3 || called) {
            totalSize += rowSize;
            memory.push(row);
        }
    };

    const createDir = () => randomNumber(9999, 1000);
    const createData = () => randomNumber(999999, 100000);
    const createSize = () => randomNumber(4, 1) * 4;
    const deleteProcess = (process) => memory.splice(process, 1);
    const randomNumber = (max, min) => Math.round(Math.random() * (max - min)) + min;
    const requestMemory = (process) => process.size += 5;

    const getProcesses = () => {
        if (memory.length != 0) {
            const calls = setInterval(() => callProcess(), 1000);
            setTimeout(() => {
                clearInterval(calls);
                print();
                getProcesses();
            }, 4000);
        } else
            finishBuffer();
    };

    const callProcess = () => {
        if (memory.length == 0) finishBuffer();
        let processAux;
        while (memory[processAux] == undefined)
            processAux = randomNumber(memory.length, 0);
        const process = memory[processAux];
        executeOperation(process);
    };

    const executeOperation = (process) => {
        let processToUse;
        while (memory[processToUse] == undefined)
            processToUse = randomNumber(memory.length, 0);
        let operation = randomNumber(4, 1);

        switch (operation) {
            case 1:
                if (isValid())
                    console.log(`The process ${process.dir} read the process ${memory[processToUse].dir} successfully!`);
                else
                    console.log(`The process ${process.dir} tried to read the process ${memory[processToUse].dir}, invalid request...`);
                break;
            case 2:
                if (isValid()) {
                    if (randomNumber(10, 0) <= 5) {
                        memory[processToUse].dir = createDir();
                        memory[processToUse].data = createData();
                        memory[processToUse].size = createSize();
                        console.log(`The process ${process.dir} wrote the process ${memory[processToUse].dir} successfully!`);
                    } else {
                        createProcess(true);
                        console.log(`The process ${process.dir} create the process ${memory[memory.length - 1].dir} successfully!`);
                    }
                } else
                    console.log(`The process ${process.dir} tried to write the process ${memory[processToUse].dir}, invalid request...`);
                break;
            case 3:
                if (isValid()) {
                    console.log(`The process ${process.dir} eliminated the process ${memory[processToUse].dir} successfully!`);
                    deleteProcess(processToUse);
                } else
                    console.log(`The process ${process.dir} tried to delete the process ${memory[processToUse].dir}, invalid request...`);
                break;
            case 4:
                if (isValid()) {
                    console.log(`The process ${process.dir} requested more memory successfully!`);
                    requestMemory(process);
                } else
                    console.log(`The process ${process.dir} tried to request more memory the process ${memory[processToUse].dir}, invalid request...`);
                break;
        };
    };

    const isValid = () => {
        let probability = randomNumber(10, 0);
        if (probability <= 7)
            return true;
        else
            return false;
    };

    const print = () => {
        console.table(memory, ["dir", "data", "size"]);
        console.log(`Memory usage: ${Math.round(totalSize)} KB / ${memorySize} KB`);
    };

    const finishBuffer = () => {
        console.log('There\'s no process left...');
    };

    // CLASSES
    class Row {
        constructor(dir, data, size) {
            this.dir = dir;
            this.data = data;
            this.size = size;
        }
    };

    main();
};

module.exports = fourthAssignment;