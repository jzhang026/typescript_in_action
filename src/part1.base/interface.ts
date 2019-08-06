interface List {
    readonly id: number;
    name: string;
    age?: number;
    [x: string]: any;
}

interface Result {
    data: List[]
}

function render(result: Result) {
    result.data.forEach((datum) => {
        console.log(datum.id, datum.name)
        if (datum.age) {
            console.log(datum.age)
        }
    })
}

//此时的传入数据是完全符合我们的接口和类型定义的
let result = {
    data: [
        {
            id: 2,
            name: 'zz',
            sex: 'male',
            age: 5
        }, {
            id: 3,
            name: 'bb'
        }
    ]
}

// 假设此时我们给result.data的第一个元素传入一个新的字段【’sex'】
// 我们看到ts是不会报错的，这是因为动态语言特有的鸭式变型法
// 就是说只要一只鸟，他走起来像鸭子，游起来像鸭子。叫起来像鸭子，那我们就认为它是鸭子
// 传入的数据满足接口的必要字段，哪怕有多余的字段。也是可以通过的
//（这种情况有一种例外，就是当直接在函数传入对象自变量时，不会通过类型检查）
// 三种方法绕过这种检查， as 或者 <> 断言，抑或是字符串索引签名
// let result = {
//     data: [
//         {
//             id: 2,
//             name: 'zz',
//             sex: 'male'
//         }, {
//             id: 3,
//             name: 'bb'
//         }
//     ]
// }
render(result)

interface StringArray {
    [index: number] : string;

}

// let chars: StringArray = ['S', 'A'];
let chars: StringArray = ['zz', 'sds'];
// console.log(chars)
interface Names {
    [x: string]: any;
    // y: number;
    [z: number]: number;
}

// interface Add {
//     (x: number, y: number): number
// }
//类型别名
type Add = (x: number, y: number) => number

let add1: Add = (a, b) => a + b

//混合类型的接口
interface Lib {
    (): void;
    version: string;
    doSomething(): void;
}

function getLib() {
    let lib: Lib = (() => {

    }) as Lib;
    lib.version = '1.0';
    lib.doSomething = () => {}
    return lib;
}

let lib1 = getLib();
lib1.doSomething();
let lib2 = getLib();