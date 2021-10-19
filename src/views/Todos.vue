<template>
  <div>
    <h2>to-do list</h2>
    <AddTodo @addTodo='addTodo'/>
    <TodoList 
      v-bind:todos="todos" 
      v-on:remove-todo="removeTodo" 
      v-if="todos.length"
      />
      <div v-else>
        No todos!
      </div>

      <router-link to='/'>Home</router-link>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";

export default {
  name: "App",
  data() {
    return {
      todos: [
        { id: 1, title: "купить хлеб", completed: false },
        { id: 2, title: "постирать вещи", completed: false },
        { id: 3, title: "вымыть окна", completed: false },
      ],
    };
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((elem) => {
        return elem.id !== id;
      });
    },
    addTodo(todo) {
      this.todos.push(todo);
    },
  },

  components: {
    TodoList: TodoList,
    AddTodo: AddTodo,
  }
};
</script>