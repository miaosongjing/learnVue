/**
 * Created by Administrator on 2018/3/27 0027.
 */
//arr复习
    //1.四个循环
//编程式 for for in  for of
// for 遍历数组,带有length
// for in  遍历对象,可枚举(原型上扩展的,通过hasOwnProperty进行判断) key是string类型
// for of 遍历数组,不能遍历对象 编程式
//声明式  forEach
let arr=[1,2,3,4,5];
let a=arr.forEach(function (item, index) {
   //1.可以遍历每一项
   // 2.没有返回值,为undefined,也不接受return返回值
});
//2.map 将原数组映射成一个新的数组
let newArr=arr.map(function (item, index) {
   return '<li>${item}</li>>';
    //通过返回值组成一个新的数组
});
console.log(newArr.join("+"));
//3.filter 过滤,返回符合条件的项组成的新数组,原有数组不变
let newArr2=arr.filter(item=>item>1);
console.log(newArr2);
//4.find:查找符合条件的项,只要找到立即返回 原数组不变
let c=arr.find(item=>item>3);//4
console.log(c);
//5.some 返回布尔值,查找到符合条件的返回true,否则返回false
let b=arr.some(function (item, index) {
    return item>2&&item<5;
});
console.log(b);//true
//6.every:查找false,找到之后马上返回,结束整个函数
let d=arr.every(function (item, index) {
    return item>2&&item<5;
});
console.log(d);//false
//7.includes:是否包含某一项,有返回true es6 indexof:返回第一次出现的索引位置,没有返回-1
//8.reduce:收敛求和
let sum1=arr.reduce(function (pre, next) {
    //第一次进来 prev:第一项 next:第二项
    //之后       pre 代表上一次回调函数的返回值,next代表当前索引项
    console.log(pre,next);
    return pre+next;
});
console.log(sum1);
let obj=[{count:3,price:5},{count:2,price:6},{count:5,price:7}];
let sum2=obj.reduce(function (pre, next) {
    console.log(next.count,next.price);
    return pre+(next.count*next.count);
},0);
console.log(sum2);