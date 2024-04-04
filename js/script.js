import {todoList} from './data.js';

const {createApp} = Vue;

//crea l'applicazione
createApp({
    data(){
        return{
            todoList: todoList,
            itemText: '',
            done:'',
        }
    },
    methods: {
        toggleDone(id){
            const item = this.todoList.find((el) => {
                return el.id === id;
            })
            console.log(item);
            if(item){
                item.done = !item.done;
            }
            this.todo[item].done = !this.todo[item].done
        },
        

    },
    computed: {
        filterTodo() {
            return this.todo.filter((el) => {
                if(this.done === ''){
                    return true;
                }
                if(this.done === 'false'){
                    return el.done === false;
                }
                if(this.done === 'true'){
                    return el.done === true;
                }
            })
        }
    },
    mounted(){
        console.log(this.todoList);
    }
}).mount('#app')