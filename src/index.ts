let message: string = 'hello typescript';
message = message + ' again';
console.log(`string type ${message}`);

let isTrue: boolean = false;
console.log(`boolean type ${isTrue}`);

let magicnumber: number = 587;
console.log(`number type ${magicnumber}`);

let notUndefined: undefined = undefined;
console.log(`undefined type ${notUndefined}`);

let notPresent: null = null;
console.log(`null type${notPresent}`);

let starSymbol: symbol = Symbol('star');
let obj = {
    [starSymbol]: 'value'
};
console.log(`use symbol as key ${obj[starSymbol]}`);

let biggy: bigint = 24n;
console.log(`bigint stpe ${biggy}`);

let array: Array<number> = [1, 2, 3, 4];
let array2: number[] = [12, 13, 14, 15];
console.log(`array type length ${array2.length}`)

// fixed length arrays are commonly known as touple
let touple: [number, number] = [0, 0];
touple = [1, 2];
// touple = [5]; compile time error 
// touple = [1, 2, 5]; compile time error
// touple = ['name', 33]; compile time error
console.log(`touple type with 2 key`)