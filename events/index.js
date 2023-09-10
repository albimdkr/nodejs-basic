const {EventEmitter} = require('events');

const myEvenEmitter = new EventEmitter();

const birthdayEventListener = ({name}) => {
    console.log(`Happy Birthday ${name}!`);
} 

myEvenEmitter.on('hari-ulang-tahun',birthdayEventListener);
myEvenEmitter.emit('hari-ulang-tahun', { name: 'Albi'});

//method 2
const adaYangUlangTahun = ({name}) => {
    birthdayEventListener(name);
}

myEvenEmitter.on('hari-ulang-tahun', adaYangUlangTahun);
myEvenEmitter.emit('hari-ulang-tahun', { name: 'Albi-2' });
