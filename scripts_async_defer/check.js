console.log('Scripts Execution start:', new Date() - document.startTime, 'ms');

const delay = (ms) => {
    const startPoint = new Date().getTime()
    while (new Date().getTime() - startPoint <= ms);
}

//try 1000 and 100
delay(100); 

console.log('Scripts Executed:', new Date() - document.startTime, 'ms');