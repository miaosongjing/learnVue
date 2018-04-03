// let fn=function (x,y) {
//     return x+y;
// };
let fn=(x,y)=>x+y;
console.log(fn(10,20));
/*
箭头函数和普通函数的区别：
1.箭头函数中没有arguments
2.箭头函数中的this指向上级作用域
实战项目中，不是把所有的函数都改为箭头函数，根据自身需要进行修改

*/
let fn1=(...arg)=>{
//箭头函数不支持arguments，es6中使用剩余运算符...arg接收传递进来的参数值
    console.log(arg);
    // console.log(arg instanceof Array);//使用剩余运算符接收的结果本身就是一个数组，不需要转换
    return eval(arg.join('+'));
    
}
console.log(fn1(10,20,30));

let obj={
    name:'obj',
    fn:function () { 
        console.log(this);
        /*
        普通函数执行this指向：看函数执行前面是否有点，有点时，点前面是谁this指向谁，没有点this指向window或undefined
        自执行函数中的this指向window
        定时器中this指向window
        事件绑定中的this指向本对象
        使用call、apply改变this指向
        */
        
    },
    sum(){ }//函数的两种写法
};
obj.fn();//obj
 setTimeout(obj.fn,1000);//window
 //箭头函数中，没有自己的this指向，用到的this指向宿主环境（即函数定义的环境）
 let obj1={
     fn:()=>{
         console.log(this);
         
     }
 };
 obj1.fn();//window
 setTimeout(obj.fn,1000);//window
 obj.fn.call(12);//window 