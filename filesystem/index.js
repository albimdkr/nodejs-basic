// Asynchronous
const fs = require('fs');
 
const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};
 fs.readFile('notes.txt', 'UTF-8', fileReadCallback);


// Synchronous 
const data = fs.readFileSync('notes.txt', 'UTF-8');
console.log(data);


console.log("===============");
// READIBLE
console.log("READABLE");
const readableStream = fs.createReadStream('notes.txt', {
    highWaterMark: 10
});

readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});
 
readableStream.on('end', () => {
    console.log('Done');
});