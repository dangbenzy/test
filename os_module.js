const os= require('os')

//console.log(os.userInfo())
console.log(`System's uptime is ${os.uptime}`)

const osInfo= {
    name: os.type(),
    release: os.release(),
    toltalmem:os.totalmem(),
    freemem: os.freemem()
}

console.log(osInfo)