~function(){
    let inputList=document.getElementsByTagName('input'),
        inputAry=[];
        //为了兼容处理，对需要placeholder设置的元素标签添加自定义属性data-place
        // 1.获取具有data-place属性的input
    for(var i=0;i<inputList.length;i++){
        let item=inputList[i];
        item.getAttribute('data-place')!==null?inputAry.push(item):null;
    }
        // 2.在非IE中浏览器中，采用内置的placeholder，即将自定义属性值存放在placeholder中
    if(!/(MSIE|Trident)/i.test(navigator.userAgent)){
        for(let k=0;k<inputAry.length;k++){
            let itemInp=inputAry[k];
            itemInp.placeholder=itemInp.getAttribute('data-place');
        }
    }
        // 3.在IE浏览器中,采用自己设定的方式
        for(var z=0;z<inputAry.length;z++){
            let inputItem=inputAry[z],
                inputText=inputItem.getAttribute('data-place');
                //无论能否使用内置的placeholder，都使其为‘’
            inputItem.placeholder='';
            /*
            新创建一个span，放在input的父级的末尾，为span设置样式（定位，和input的样式类似）
            */
           var spanTip=document.createElement('span');
           spanTip.innerHTML=inputText;
           spanTip.className='placeLike';
           spanTip.style.cursor='text';
           inputItem.parentNode.appendChild(spanTip);
           //存储每一个input和span的索引进行存储，并把spanTip存储在input的自定义属性上，方便后期使用
           inputItem.index=spanTip.index=z;
           inputItem.spanTip=spanTip;
        //input和span绑定事件行为：和内置placeholder的效果一致
            //input获取焦点
           spanTip.onclick=function(){
                inputAry[this.index].focus();
           }
           //控制input的输入行为:建议使用DOM2事件绑定，防止在其他地方西需要通过keyup或者keydown行为处理其他事情
           //有内容，span消失；没有显示
           inputItem.onkeydown=inputItem.onkeyup=function(){
                var value=this.value,//获取文本框内容
                    spanTip=this.spanTip;//获取对应的span
                spanTip.style.display=value.length>0?'none':'block';
                
           }
            
        }
}();