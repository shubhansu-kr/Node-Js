const os = require('os');
// OS is the object to access all the os module methods  

// userInfo -> Function to get the os user info 
const user = os.userInfo();
console.log(user);

// uptime() -> Return the time(in seconds) for which the pc is running.
console.log(`PC is running for ${os.uptime()} seconds.`);

const currentOS = {
    name: os.type(),
    release : os.release(),
    totalMemory: os.totalmem(),
    availableMemory: os.freemem()
}

console.table(currentOS);

// Refer to Documentation for other os methods and info 