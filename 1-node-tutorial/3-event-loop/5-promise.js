const { readFile, writeFile } = require('fs').promises;
// const util = require('util')

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        console.log(first, second);
        writeFile('./content/result-promise.txt', `This is Awsome: \n${first}\n${second}`)
        
    } catch (error) {
        console.log(error);
    }
}

start()

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }
// getText('./content/first.txt')
//     .then(data => console.log(data))
//     .catch(err => console.log(err))