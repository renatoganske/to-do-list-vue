
const todolistApp = {
    data() {
        return {
            todos: [],
            newTodo: {
                done: false
            }
        }
    },
    methods: {
        addTodo: function() {
            if (this.newTodo.text) {
                this.todos.push(this.newTodo);
                this.newTodo = {
                    done: false
                };
            } else {
                alert("O texto da tarefa é obrigatório")
            }
        }
    }
};

Vue.createApp(todolistApp).mount('#app');