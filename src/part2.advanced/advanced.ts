let c = (x = 1) => x + 1
window.onkeydown = (event) => {

}

interface Foo {
    bar: number
}

//类型断言
// let foo = {} as Foo
// foo.bar = 1
let foo: Foo = {
    bar: 1
}
//类型断言不能滥用

// 当一个类型Y可以被赋值给另一个类型X时，我们就可以说类型X兼容类型Y
// X兼容Y: X（目标类型）= Y（源类型）
let s: string = 'a'


// 接口兼容性
interface X {
    a: any;
    b: any;
}

interface Y {
    a: any;
    b: any;
    c: any;
}

let xx: X = {a: 1, b: 2}
let y: Y = {a: 1, b:2, c: 3}
xx = y
//成员少的会兼容成员多的 鸭式变型法

//韩式兼容性
type Handler = (a: number, b: number) => void;
function hof(handler: Handler) {
    return handler;
}

//目标函数的参数个数 谣多余原函数的参数个数
let handler1= (a: number ) => {}
hof(handler1)
let handler2 = (a: number, b: number, c: number) => {}
// hof(handler2)

// 可选参数和剩余参数
let aa = (x: number, y: number) => {};
let bb = (x: number, y?: number) => {}
let cc = (...args: number[]) => {}
aa = cc
aa(1, 2)


//参数类型
let handler3 = (a: string) => {}

