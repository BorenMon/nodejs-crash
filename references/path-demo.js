const path = require('path')

console.log(__filename)

// Base file name
console.log(path.basename(__filename))

// Directory name
console.log(path.dirname(__filename))
console.log(__dirname)

// File extension
console.log(path.extname(__filename))

// Create path object
console.log(path.parse(__filename))

// Concatenate paths
console.log(path.join(__dirname, 'test', 'test.html'))