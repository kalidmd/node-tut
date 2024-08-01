const { writeFileSync } = require('fs')
const fs = require('fs')

for(let i = 0; i < 100000; i++) {
    writeFileSync('./content/big.txt', `hello world ${i}\n`, {flag: 'a'})
}

// let path = './content/big.txt'
// fs.unlink(path, (err) => console.log(err))