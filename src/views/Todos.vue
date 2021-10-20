<template>
  <div class="mainBlock">
    <h2>to-do list</h2>
    <AddTodo 
      @addTodo='addTodo'
      :todos="todos"
      />
      <Loading v-if="loading"/>
    <TodoList 
      :todos="todos" 
      @remove-todo="removeTodo" 
      v-else-if="todos.length"
      />
      <div class="message" v-else>
        No todos!
      </div>

     <button class="btn"> <router-link to='/'>Home</router-link> </button>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
import axios from 'axios';
import Loading from "@/components/Loading.vue";


export default {
  name: "App",
  data() {
    return {
      todos: [],
      loading:true
    };
  },
  
  methods: {
    async removeTodo(id) {
    this.todos = this.todos.filter((elem) => {
      return elem.id !== id;
    });
      await axios.delete("https://todo-36978-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json")
    },
    addTodo(todo) {
      this.todos.push(todo)
      axios.post("https://todo-36978-default-rtdb.europe-west1.firebasedatabase.app/todos.json", todo).then(
       response => {
         console.log(response)
       })
       .catch(error => console.log(error))
  },

    async fetchPost() {
      // setTimeout(()=>{
        const {data} = await axios.get("https://todo-36978-default-rtdb.europe-west1.firebasedatabase.app/todos.json")
        const res = Object.keys(data).map((key) => {
          return {
            id: key,
            title: data[key].title,
            completed: data[key].completed
          }
        })
        console.log(res)
        this.todos = res
        this.loading = false
        // fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
        // .then(response => response.json())
        // .then(json =>{
        //   this.todos = json
        //   this.loading = false
        // })
        // },4000)

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
  padding-top:50px ;
}

.btn a{
  text-decoration: none;
  color: black;
}

.btn{
  height: 25px;
  padding: 0 5px;
  background-color: #EFEFEF(142, 178, 232,0.5);
  border:1px solid #d0d0d0;
  border-radius: 2px;
}
</style>