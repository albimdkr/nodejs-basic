// const message = (name) => {
//     console.log(`Hello Name`);
// }

// message("hello world!");

// const cpuInformation = process.memoryUsage();
// console.log(cpuInformatioMn);


// MODULARITATION   
const Tiger = require('./modularization/tiger');
const Wolf = require('./modularization/wolf');

const fighting = (tiger, wolf) => {
    if (tiger.strength > wolf.strength){
        tiger.growl();
        return;
    }

    if (wolf.stregth > tiger.stregth){
        wolf.howl();
        return;
    }

    console.log("Tiger and Wold have save strangth!");
}

const tiger = new Tiger();
const wolf = new Wolf();
fighting(tiger, wolf);
