//解构赋值的作用
// 1.快递交换两个变量值
let a=12;
let b=13;
[a,b]=[b,a];

//2.接收函数返回的多个值
let fn=function(){
    let c=12,
        d=13,
        e=14;
    return [c,d,e];
}
let [c,d,e]=fn();
console.log(c,d,e);

// 3.函数参数的定义和默认值,可以快速处理options的默认值
let fn1=function ([A,B,C,D=0]){
    console.log(A,B,C,D);
};
fn1([12,23,34]);

let fn2=function ({x,y,z=9}) {
    console.log(x,y,z);
};
fn2({x:10,y:20});

//es6支持直接为函数形参设置默认值
let fn3=function (x=0) {//为x设置默认值
    // x=x||0;
};
fn();

//4.遍历Map结构
//5提取json数据