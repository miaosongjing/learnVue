/**
 * Created by Administrator on 2018/3/28 0028.
 */
//let vage='';
//function buy(callback){
//    setTimeout(function () {
//        vage='白菜';
//        callback(vage);
//    },2000)
//}
//buy(cook);
//function cook(val){
//    console.log('可以走'+val);
//}
//通过回调函数解决异步


//promise
//三个状态:pending fulfiled rejected
var a=Math.random();
console.log(a);
new Promise(function (res, rej) {
    if(a>0.5){
        res();
    }else{
        rej();
    }
}).then(function () {
        setTimeout(function () {
            console.log('小黄');
            if(a>0.5){
                res();
            }else{
                rej();
            }
        },3000)

    }, function () {
        console.log('走路');
        if(a>0.5){
            res();
        }else{
            rej();
        }
}).then(function () {console.log('公交');}, function () {console.log('火车');}
);