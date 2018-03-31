/**
 * Created by Administrator on 2018/3/27 0027.
 */
//箭头函数
    //let:不存在变量提升 不能重复声明变量
//let fn=function fn(num){
//    return num
//};
//let fn=num=>{return num};//如果只有一个参数,可以把()省略
//let n=()=>num;//如果没有参数,用()占位
//let fn=num-=>num;//如果只有一个语句/return语句,可以省略{}/{}+return
//let fn=(num)=>{return num};

//function fn(b){
//    return function (c) {
//        return b+c
//    };
//};
//let fn=b=>c=>b+c;;//高阶函数:大于等于两个箭头

//特点
// 1.箭头函数中没有this,指向上层作用域(函数的上级作用域:跟函数定义有关,跟函数执行无关)
var t=100;
function total(){
    var t=10;
    return function () {
        console.log(t);
    }
}
total()();
let f=()=>{
    console.log(this);//window,node中指向global
};
f();
let obj={
    fn:()=>{
        console.log(this);//node中指向global
    }
    //fn(){console.log(this);} //等价于上一中写法
};
obj.fn();
// 2.没有arguments
//3.不能作为构造函数被new,但通过class定义Fn
class fn{
    constructor (num){
        //this指向实例 通过constructor接收传参
        console.log(num);
    }
}
new fn(100);
//4.可以调用call方法,但是不能改变其中的this指向,它仍指向外层作用域
let ff=()=>{
    console.log(this);
};
ff.call(100);

