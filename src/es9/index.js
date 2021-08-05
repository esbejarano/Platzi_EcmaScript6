const obj = {
    name: 'oscar',
    age: 26,
    country: 'CO',
}

let  {name, ...all} = obj;
console.log(name, all);


// estructuracion de objetos, se pueden unir varios objetos
const obj2 = {
    name: 'Erick',
    age: 27
}

const obj3 = {
    ...obj2,
    country: 'CO'
};

console.log(obj3);

// implementan finally
const helloworld = () => {
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(() => resolve('hello World'), 3000)
        : reject(new Error('test error'))
    });
}

helloworld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('finaliza helloworld'));

// se implementa regex para acceder a los grupos de cada uno
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const test = regexData.exec('2018-04-20');
const year = test[1];
const month = test[2];
const day = test[3];

console.log(year, month, day);