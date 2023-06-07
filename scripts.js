
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
                localStorage.setItem("todos", JSON.stringify(this.todos))
            } else {
                alert("O texto da tarefa é obrigatório")
            }
        }
    }
};

Vue.createApp(todolistApp).mount('#app');