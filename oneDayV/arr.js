/**
 * Created by Administrator on 2018/3/27 0027.
 */
//arr��ϰ
    //1.�ĸ�ѭ��
//���ʽ for for in  for of
// for ��������,����length
// for in  ��������,��ö��(ԭ������չ��,ͨ��hasOwnProperty�����ж�) key��string����
// for of ��������,���ܱ������� ���ʽ
//����ʽ  forEach
let arr=[1,2,3,4,5];
let a=arr.forEach(function (item, index) {
   //1.���Ա���ÿһ��
   // 2.û�з���ֵ,Ϊundefined,Ҳ������return����ֵ
});
//2.map ��ԭ����ӳ���һ���µ�����
let newArr=arr.map(function (item, index) {
   return '<li>${item}</li>>';
    //ͨ������ֵ���һ���µ�����
});
console.log(newArr.join("+"));
//3.filter ����,���ط�������������ɵ�������,ԭ�����鲻��
let newArr2=arr.filter(item=>item>1);
console.log(newArr2);
//4.find:���ҷ�����������,ֻҪ�ҵ��������� ԭ���鲻��
let c=arr.find(item=>item>3);//4
console.log(c);
//5.some ���ز���ֵ,���ҵ����������ķ���true,���򷵻�false
let b=arr.some(function (item, index) {
    return item>2&&item<5;
});
console.log(b);//true
//6.every:����false,�ҵ�֮�����Ϸ���,������������
let d=arr.every(function (item, index) {
    return item>2&&item<5;
});
console.log(d);//false
//7.includes:�Ƿ����ĳһ��,�з���true es6 indexof:���ص�һ�γ��ֵ�����λ��,û�з���-1
//8.reduce:�������
let sum1=arr.reduce(function (pre, next) {
    //��һ�ν��� prev:��һ�� next:�ڶ���
    //֮��       pre ������һ�λص������ķ���ֵ,next����ǰ������
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