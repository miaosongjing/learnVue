/**
 * Created by Administrator on 2018/3/27 0027.
 */
//��ͷ����
    //let:�����ڱ������� �����ظ���������
//let fn=function fn(num){
//    return num
//};
//let fn=num=>{return num};//���ֻ��һ������,���԰�()ʡ��
//let n=()=>num;//���û�в���,��()ռλ
//let fn=num-=>num;//���ֻ��һ�����/return���,����ʡ��{}/{}+return
//let fn=(num)=>{return num};

//function fn(b){
//    return function (c) {
//        return b+c
//    };
//};
//let fn=b=>c=>b+c;;//�߽׺���:���ڵ���������ͷ

//�ص�
// 1.��ͷ������û��this,ָ���ϲ�������(�������ϼ�������:�����������й�,������ִ���޹�)
var t=100;
function total(){
    var t=10;
    return function () {
        console.log(t);
    }
}
total()();
let f=()=>{
    console.log(this);//window,node��ָ��global
};
f();
let obj={
    fn:()=>{
        console.log(this);//node��ָ��global
    }
    //fn(){console.log(this);} //�ȼ�����һ��д��
};
obj.fn();
// 2.û��arguments
//3.������Ϊ���캯����new,��ͨ��class����Fn
class fn{
    constructor (num){
        //thisָ��ʵ�� ͨ��constructor���մ���
        console.log(num);
    }
}
new fn(100);
//4.���Ե���call����,���ǲ��ܸı����е�thisָ��,����ָ�����������
let ff=()=>{
    console.log(this);
};
ff.call(100);

