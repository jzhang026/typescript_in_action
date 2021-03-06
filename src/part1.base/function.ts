function add_1(x: number, y: number) {
    return x + y;
}
let add2: (x: number, y: number) => number;
type add3 = (x: number, u: number) => number;
function add5(x: number, y?:number) {
    return y? x+y: x;
}

function add6(x: number, y=0, z: number, q = 1) {
    return x+y+z+q
}
add6(1, undefined, 3) //这个undefined 是必须传的，因为在他之后有必选参数

function add7(x: number, ...rest: number[]) {
    return x + rest.reduce((a,b)=> a+b, 0);

}

// console.log(add7(1,2,3,4,5,6))

//函数重载，名称相同，参数个数类型不同，便完成重载
function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any[]): any {
    let first = rest[0];
    if(typeof first ==='string') {
        return rest.join('');
    }
    if(typeof first === 'number') {
        return rest.reduce((a,b) => a +b, 0)
    }
}

// console.log(add8(1,2,3,4,5,6,7))
// console.log(add8('s', 'aa', 'bb', 'dd'))