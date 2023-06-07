var todos = [
    {
        text: 'Aprender HTML, CSS e Javascript',
        done: true
    },
    {
        text: 'Aprender o básico de Vue JS',
        done: false
    }
];

const todolistApp = {
    data() {
        return {
            todos: window.todos
        }
    }
};

Vue.createApp(todolistApp).mount('#app');