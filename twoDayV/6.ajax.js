/**
 * Created by Administrator on 2018/3/28 0028.
 */
//�������ݵķ�ʽ:ajax,jsonp,link,src,url
//ajax��promise�Ľ��
function ajax({url="",type="get",dataType="json"}){
    return new Promise(function (resolve, reject) {
        var xhr=new XMLHttpRequest();
        xhr.open(type,url,true);
        xhr.onload= function () {
            //��״̬��=4
            resolve(xhr.responseText);

        };
        xhr.onerror= function (err) {
            reject(err);
        };
        xhr.send();
    });
};
