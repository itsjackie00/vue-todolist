import { todoList } from './data.js';

const { createApp } = Vue;

//crea l'applicazione
createApp({
    data() {
        return {
            todoList: todoList,
            itemText: '',
            done: '',
        }
    },
    methods: {
        toggleDone(id) {
            const item = this.todoList.find((el) => {
                return el.id === id;
            })
            console.log(item);
            if (item) {
                item.done = !item.done;
            }
        },
        removeItem(id) {
            const i = this.todoList.findIndex((el) => el.id === id);
            if (i !== -1) {
                this.todoList.splice(i, 1);
            }
        },
        addTodo (){
            let nextId = 0;
            const newTodoList = {
                id: null,
                text: this.itemText,
                done: false
            }
            this.todoList.forEach((el) => {
                if(nextId < el.id){
                    nextId = el.id;
                }
            })
            newTodoList.id = nextId + 1;
            this.todoList.push(newTodoList);
            this.itemText = '';
            console.log(this.todoList);
        }

    },
    computed: {
        filteredTodo() {
            return this.todoList.filter((el) => {
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
    mounted() {
        console.log(this.todoList);
    }
}).mount('#app')