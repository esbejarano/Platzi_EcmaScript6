// objet.entries, me convierte en array un json con clave valor (array de arrays)

const data = {
    front: 'oscar',
    back: 'andrea',
    design: 'Juana',
};

const entries = Object.entries(data);
console.table(entries);

// trailing comma es un comita al final de las propiedades de un objeto para evitar que existieran errores por falta de commas 
const data2 = {
    front: 'oscar',
    back: 'andrea',
    design: 'Juana',
};

const values = Object.values(data2);
console.table(values);


const string = 'Hello!!';
console.log(string.padStart(string.length+2, 'hi'));
console.log(string.padEnd(string.length+3, 'hi2'));

// async y await

const helloWorld = () => {
    return new Promise((resolve, reject)=>{
        (false) ?
            setTimeout(()=> resolve('hello world'), 5000) :
            reject(new Error('new Error'))
    });
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);    
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.error('cant execute another function: ', error);
    }
}
anotherFunction();