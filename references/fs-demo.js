const fs = require('fs')
const path = require('path')

// Create folder
// fs.mkdir(path.join(__dirname, 'test'), {}, err => {
//   if(err) throw err
//   console.log('Folder is created...')
// })

// Create and write to file
// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello World!', err => {
//   if(err) throw err
//   console.log('File is written...')
// })
// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'I Love NodeJS.', err => {
//   if(err) throw err
//   console.log('File is written...')
// })
// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello World!', err => {
//   if(err) throw err
//   console.log('File is written...')

//   // Append file
//   fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), ' I Love NodeJS.', err => {
//     if(err) throw err
//     console.log('File is written...')
//   })
// })

// Read file
// fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf-8', (err, data) => {
//   if(err) throw err
//   console.log(data)
// })

// Rename file
fs.rename(path.join(__dirname, 'test', 'hello.txt'), path.join(__dirname, 'test', 'hello-world.txt'), (err) => {
  if(err) throw err
  console.log('File is renamed...')
})

