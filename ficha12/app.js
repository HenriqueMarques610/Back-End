var fs = require('fs')
var zlib = require('zlib')

function readFile(path) {
    var file = fs.readFile(path, (err, data) => {
        console.log(data.toString())
        console.log("File Read")
    })
}

function readFileStream(path) {
    var readerStream = fs.createReadStream(path)
    var writerStream = fs.createWriteStream('copy.txt')
    readerStream.setEncoding('UTF8')

    readerStream.on('data', function (chunk) {
        //console.log(chunk)
        writerStream.write(chunk, 'utf8')
    })

    readerStream.on('end', function () {
        console.log("File Read")
        writerStream.end()
    })

    readerStream.on('error', function (err) {
        console.log(err.stack)
    })
}

//readFile("text.txt")
// readFileStream("text.txt")

var readerStream = fs.createReadStream("copy.txt")
var writerStream = fs.createWriteStream('copy.txt.gz')
readerStream.pipe(writerStream)

readerStream
    .pipe(zlib.createGzip())
    .pipe(writerStream)

var x = 0