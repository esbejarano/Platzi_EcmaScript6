// aplana a un arreglo en una matriz
let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(2));

let array2 = [1,2,3,4,5];
console.log(array2.flatMap((value) => [value, value*2]));

let hello = '                Hello world';
console.log(hello);
console.log(hello.trimStart());



let hello = 'Hello world                ';
console.log(hello);
console.log(hello.trimEnd());

// optional error binding
try {

} catch {
    console.log(error);
}

// convertir array de arrays en objetos
let entries = [["name", "oscar"],["age", 32]];
console.log(Object.fromEntries(entries));

// objeto de tipo simbolo
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);

// todo esto  es gracias al equipo de TC39, encargados de implementar lo nuevo de EcmaScript