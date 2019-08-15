interface DogInterface {
    run(): void
}
interface CatInterface {
    jump(): void
}

// 交叉类型
let pet: DogInterface & CatInterface = {
    run() {},
    jump() {}
}

// 联合类型
let a1: number | string = 'a'
let b1: 'a' | 'b'

// 类型保护区块
interface Square {
    kind: 'square';
    size: number;
}

interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
}

type Shape = Square | Rectangle

 // 根据公有字段确认的类型保护区块
function area(s: Shape) {
    switch (s.kind) {
        case 'square':
            return s.size * s.size;
        case 'rectangle':
            return s.width * s.height;
    }
}

// 索引类型
let obj1 = {
    a: 2, b: 3, c: 4
}

//这个function就是以数组格式传入你想抽取的keys，
//如果所传入的key在原obj里没有，ts不会报错，会为我们输出undefined
//ts为了约束这种情况，就有了[索引类型]。
// function getValues(obj: any, keys: string[]) {
//     return keys.map(key => obj[key]);
// }

// keyof T
interface Obj {
    a: number,
    b: string
}
let key: keyof Obj;

// T[k] 对象T的属性K所代表的类型

let value: Obj['a'];
// T extends U 泛型约束,索引类型可以实现对对象属性的查询和访问
function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map(key => obj[key]);
}
