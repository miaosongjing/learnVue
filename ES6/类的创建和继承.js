// function Person(name,age){
//     if(typeof new.target==='undefined'){//作为一个普通函数执行时报错
//         throw new Error(`当前Person不能作为一个普通函数执行`)
//     }
//     /*
//     new.target：是es6的新语法
//     通过new执行返回的是当前创建的类；
//     如果当作普通函数执行，返回的是undefined
//     */
//     this.name=name;
//     this.age=age;
// }
// Person.prototype={
//     constructor:Person,
//     say:function(){}
// }

// es6中类的创建
class Person{
    constructor (name,age){
        // 在constructor中为实例增加私有属性和方法
        this.name=name;
        this.age=age;
    }
    // 在类原型上添加方法
    sum（）{}
    // 把Person当作普通对象增减属性和方法，在属性前加static
    static study(){
        console.log('好好学习')
    }
}
let p1=new Person;
// Person();//报错，es6不允许把创建的类当作普通函数执行

// 类的继承
class Parent{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    sum(){
        return this.x+this.y;
    }
}
class Child extends Parent{
    /*
    创建child类，并且继承了person类
    把父类实例的私有属性继承给子类实例的私有属性
    子类实例的原型链可以找到父类的原型
    */
   //为子类实例增加私有属性时，使用constructor
    constructor(...arg){
        super(...arg);//必须把super放在第一行,实参传递给父类方法 相当于Parent.prototype.constructor.call（this，...arg）；执行父类的constructor方法，并将参数传递
        let [,,z]=arg;
        this.z=z;
    }
    fn(){

    }


}
let c=new Child(10,20,30);
