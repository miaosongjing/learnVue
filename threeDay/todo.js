let vm = new Vue({
    el: '#app',
    created(){//7.当页面的hash发生变化时,触发这个事件
        window.addEventListener('hashchange', ()=> {
//                console.log(window.location.hash);
            this.hash=window.location.hash.substr(1);
        });
    },
    data: {
        title:'',
        todos:[{isSelected:false,title:'睡觉'},{isSelected:false,title:'吃饭'}],
        hash:'/all'
    },
    methods:{
        add(){
            this.todos.push({isSelected:false,title:this.title});
            this.title='';
        },
        remove(val){
            this.todos=this.todos.filter(item=>item!==val);
        },
        chooseAll(){
            //hash=all时,数组不变
            //hash=finished时,数组选择isSelected为false
            //hash=unfinish时,数组选择isSelected为true
            console.log(this.hash);
            if(this.hash=='/finished'){
                this.todos=this.todos.filter(item=>{
                    console.log(item.title);
                    console.log(item.isSelected);//完成时,isSelected为true
                    //完成时,isSelected为true
                    return !item.isSelected
                });
            };
            if(this.hash=='/unfinish'){
                this.todos=this.todos.filter(item=>{
                    return item.isSelected
                });
            };



        }
    }
});/**
 * Created by Administrator on 2018/3/31 0031.
 */
