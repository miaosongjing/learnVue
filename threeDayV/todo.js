let vm = new Vue({
    el: '#app',
    created(){//7.��ҳ���hash�����仯ʱ,��������¼�
        window.addEventListener('hashchange', ()=> {
//                console.log(window.location.hash);
            this.hash=window.location.hash.substr(1);
        });
    },
    data: {
        title:'',
        todos:[{isSelected:false,title:'˯��'},{isSelected:false,title:'�Է�'}],
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
            //hash=allʱ,���鲻��
            //hash=finishedʱ,����ѡ��isSelectedΪfalse
            //hash=unfinishʱ,����ѡ��isSelectedΪtrue
            console.log(this.hash);
            if(this.hash=='/finished'){
                this.todos=this.todos.filter(item=>{
                    console.log(item.title);
                    console.log(item.isSelected);//���ʱ,isSelectedΪtrue
                    //���ʱ,isSelectedΪtrue
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
