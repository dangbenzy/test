let path= require('path')

console.log(path.sep)
let filepath= path.join('/content', 'subfolder','file.txt')
console.log(filepath)

let base= path.basename(filepath)
console.log(base)

let absolute= path.resolve(__dirname,'content','subfolder','file.txt')
console.log(absolute)