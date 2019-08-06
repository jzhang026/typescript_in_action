class Dog {
    // constructor被private修饰后，表示这个类既不能被实例化，又不能被继承
    // constructor被protected修饰后，表示这个类只能被继承，不能被实例话，既申明了一个基类
    // private constructor(name: string ) {
    //     this.name = name;
    // }
    constructor(name: string ) {
        this.name = name;
    }
    name: string;
    run() {}
    private pri() {}
    protected pro(){}

    readonly legs: number = 4
    static food: string = 'bones'
}

console.log(Dog.prototype)

let dog = new Dog('wangwang')
// console.log(dog)
// console.log(Dog.food)
// dog.pro();

// class Husky extends Dog {
//     constructor(name: string, color: string) {
//         super(name);
//         this.color = color;
//         this.pro()
//     }
//     color: string;
// }

class Husky extends Dog {
    //被public修饰，自动变为实例属性
    constructor(name: string, public color: string) {
        super(name);
        this.color = color;
        this.pro()
    }
    // color: string;
}
// console.log(Husky.food)
//私有成员只能被类的本身调用，不能被类的实例调用，或者不能被类的子类调用
//protected只能被类本身调用或子类调用，不能被类的实例调用

abstract class Animal {
    eat() {
        console.log('eat')
    }
    abstract sleep(): void
}

class Meow extends Animal {
    constructor(name: string) {
        super();
        this.name = name
    }
    name: string;
    run() {}
    sleep() {
        console.log('sleep mewo')
    }
}
let meow = new Meow('momo');
meow.eat();
class Rat extends Animal {
    sleep() {
        console.log('Cat sleep')
    }
}

let rat = new Rat();
let animals: Animal[] = [meow, rat];

animals.forEach(i => {
    i.sleep();
})

class WorkFlow {
    step1() {
        return this;
    }
    step2() {
        return this;
    }
}

new WorkFlow().step1().step2();
class Myflow extends WorkFlow {
    next() {
        return this;
    }
}
let myFlow = new Myflow().next().step1().next().step2();