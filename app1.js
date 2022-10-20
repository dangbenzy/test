/*const {readFileSync, writeFileSync}= require('fs')
const first= readFileSync('./content/first.txt', 'utf8')
const second= readFileSync('./content/second.txt', 'utf8');
console.log(first, second)

writeFileSync('./content/newFile.txt', 'Hello, this is a new file')
console.log(readFileSync('./content/newfile.txt', 'utf8'))*/

const {readFile, writefile}= require('fs')
readFile('./content/first.txt','utf8', (err, result)=> {
    if(err){
        return err
    }
    console.log(result)
})
