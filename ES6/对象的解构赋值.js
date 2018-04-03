// let {name,age}={name:'zh',age:9};
// console.log(name,age);

// let (A,B)={name:'zh',age:9};
// console.log(A,B);//赋值的变量名和对象的属性名一致，否则无法获取对应的属性值 undefined*2

// let {c=0}={name:'zh',age:9};
// console.log(c);//支持为当前的变量设置默认值，

// let {name}={name:'zh',age:9};
// console.log(name);//可以省略后面不需要的结构
// console.log(age);


// let {,age}={name:'zh',age:9};
// console.log(age);//报错 对象的解构赋值不允许用空占位

// let {name,...obj}={name:'zh',age:9,height:65};
// console.log(name,obj);//支持拓展运算符，拓展运算符只能放在末尾

//对象浅克隆：只克隆第一级
// let obj={name:'zh',age:9,score:[65,34,56]};
// let {...arg}=obj;
// console.log(arg,obj);
// console.log(arg===obj);//false
// console.log(arg.score===obj.score);//true

// let {name:A,age:B}={name:'zh',age:9};
// console.log(A,B);//在对象的解构赋值中，支持为对象的属性名再起一个小名

let data=[
    {
        "name":"张三",
        "age":13,
        "score":{
            "English":[100,90,34],"Math":[99,89,23],"Chinese":[34,76,87]
        }
    },
    {
        "name":"李四",
        "age":16,
        "score":{"English":[100,80,64],"Math":[99,89,23],"Chinese":[34,76,87]}
    }
]
let [{score:{English:[A],Math:[,B],Chinese:[,,C]}}]=data;
console.log(A,B,C);






