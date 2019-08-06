let a:number|undefined|null = 3;
let b:string = 'as0';
let bool:boolean = true;

// array
let arr1 : number[] = [1,2,3];
let arr2 : Array<number> = [1,2];

//tuple
let tuple: [number, string] = [33, '22'];

// tuple.push(2);
// console.log(tuple)
// console.log(tuple[1])

// function
let add = (x:number, y:number):number => x + y;
let compute : (x: number, y:number) => number;
compute = (a, b) => a + b;

// object
let obj: {x: number, y: number} = {x: 1, y: 2}
obj.x = 4;
// console.log(obj)

// symbol
let s1: symbol = Symbol();
let s2 = Symbol();
// console.log(s1 === s2)

// undefined, null
let un:undefined = undefined;
let nu: null = null;
a = undefined;
a = null;

// void
let noReturn = () => {}

// any 
let x;
x= 1;
x = [];
x = () => {};

// never
let error = () => {
    throw new Error('error');
}

let endless = ()=> {
    while(true) {}
}