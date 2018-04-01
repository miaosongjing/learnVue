/**
 * Created by Administrator on 2018/3/28 0028.
 */
//请求数据的方式:ajax,jsonp,link,src,url
//ajax和promise的结合
function ajax({url="",type="get",dataType="json"}){
    return new Promise(function (resolve, reject) {
        var xhr=new XMLHttpRequest();
        xhr.open(type,url,true);
        xhr.onload= function () {
            //当状态码=4
            resolve(xhr.responseText);

        };
        xhr.onerror= function (err) {
            reject(err);
        };
        xhr.send();
    });
};
