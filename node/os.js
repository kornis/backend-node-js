const os = require('os');

//console.log("CPU Info", os.cpus());
//console.log("IP Address", os.networkInterfaces().Hamachi.map(i => i.address));
//console.log('Free memory', os.freemem());
console.log('Type', os.type());
console.log("SO Version", os.release());
console.log("Usr info", os.userInfo());