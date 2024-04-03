import {todoList} from './data.js';

const {createApp} = Vue;

//crea l'applicazione

createApp({
    data(){
        return{
            todoList: todoList
        }
    },
    methods: {

    }
}).mount('#app')