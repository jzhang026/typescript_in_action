enum Role {
    Reporter=1,
    Developer,
    Maintainer,
    Owner,
    Guest
}
// 枚举的实现原理，反向映射。
// "use strict";
// var Role;
// (function (Role) {
//     Role[Role["Reporter"] = 1] = "Reporter";
//     Role[Role["Developer"] = 2] = "Developer";
//     Role[Role["Maintainer"] = 3] = "Maintainer";
//     Role[Role["Owner"] = 4] = "Owner";
//     Role[Role["Guest"] = 5] = "Guest";
// })(Role || (Role = {}));
// console.log(Role.Reporter)
// console.log(Role.Developer)
// console.log(Role)

//字符串枚举是不可以进行反向映射
enum Message {
    Success = "congratulations!",
    Fail = "Failed"
}

//异构枚举
enum Answer {
    N,
    Y = "yes"
}

// Role.Reporter = 2

enum Char {
    // const
    a, 
    b= Char.a,
    c = 1+3,
    // computed memeber,值不会在编译的时候的计算，而是会到运行时计算
    d = Math.random(),
    e = '123'.length,
}
// console.log(Char)

// 当我们需要一个object的值，但是又不需要一个object 可以用 常量枚举
const enum Month {
    Jan,
    Feb,
    Mar
}

let month = [Month.Jan, Month.Feb, Month.Mar]
enum E {a, b}
enum F {a=0, b = 1}
enum G {a='apple', b = 'banana'}
let e: E = 3
let f: F = 3

let e1: E.a = 4
let e2: E.b
// e1 === e2

let g1: G = G.b
let g2: G.a
// console.log(g1)