<template>
  <div class="mainBlock">
    <h2>to-do list</h2>
    <AddTodo 
      @addTodo='addTodo'
      v-bind:todos="todos"
      />
      <Loading v-if="loading"/>
    <TodoList 
      v-bind:todos="todos" 
      v-on:remove-todo="removeTodo" 
      v-else-if="todos.length"
      />
      <div class="message" v-else>
        No todos!
      </div>

      <router-link to='/'>Home</router-link>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
// import axios from 'axios';
import Loading from "@/components/Loading.vue";


export default {
  name: "App",
  data() {
    return {
      todos: [
        // { id: 1, title: "купить хлеб", completed: false },
        // { id: 2, title: "постирать вещи", completed: false },
        // { id: 3, title: "вымыть окна", completed: false },
      ],
      loading:true
    };
  },
  
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((elem) => {
        return elem.id !== id;
      });
    },
    addTodo(todo) {
      this.todos.push(todo)
      // axios.post("https://todo-36978-default-rtdb.europe-west1.firebasedatabase.app/todos.json", todo).then(
      //  response => {console.log(response)
      //  }).catch(error => console.log(error))
  },

    async fetchPost() {
      setTimeout(()=>{fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
        .then(response => response.json())
        .then(json =>{
          this.todos = json
          this.loading = false
        })},4000)

    },
    
  },
  mounted(){
      this.fetchPost()
    },
  components: {
    TodoList: TodoList,
    AddTodo: AddTodo,
    Loading:Loading
  }
};
</script>

<style scoped>
.message{
  padding-bottom: 40px ;
}
.mainBlock{
  display: flex;
  flex-direction: column;
  align-items: center;
  }
</style>