// const EventEmitter = require('events')

// const customEmitter = new EventEmitter()

// customEmitter.on('response', (name, age) => {
//     console.log(`user: ${name} data recieved with age: ${age}`);
// })

// customEmitter.on('response', () => {
//     console.log(`some other logic here`);
// })

// customEmitter.emit('response', 'john', 28)
    //**************************//
// const http = require('http')

// // const server = http.createServer((req, res) => {
// //     res.end('Welcome')
// // })

// // using event emiiter API
// const server = http.createServer()
// // emits request event
// // subscribe to it / listen for it / respond to it
// server.on('request', (req, res) => {
//     res.end('H World')
// })

// server.listen(5000)