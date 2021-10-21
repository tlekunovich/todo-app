<template>
  <div class="mainBlock">
    <h2>to-do list</h2>
    <AddTodo 
      @addTodo='addTodo'
      :todos="todos"
      />
      <Loading v-if="loading "/>
    
    <TodoList 
      :todos="todos" 
      @remove-todo="removeTodo" 
      v-else-if="todos.length"
      />
      <div class="message" v-else >
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
import {ref,onMounted} from "vue";

export default {
  name: "App",
  components: {
    TodoList, AddTodo, Loading,
  },

  setup: () => {
    const todos = ref ([])
    const loading = ref (true)
    const alert = ref (null);
    
    async function removeTodo(id) {
      await axios.delete(`https://todo-36978-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`)
      todos.value = todos.value.filter((elem) => {
        return elem.id !== id;
    })}

    function addTodo(todo) {
      todos.value.push(todo)
      axios.post("https://todo-36978-default-rtdb.europe-west1.firebasedatabase.app/todos.json", todo).then(
       response => {
         console.log(response)
       })
       .catch(error => console.log(error))}

    async function fetchPost() {
        try {
        const {data} = await axios.get("https://todo-36978-default-rtdb.europe-west1.firebasedatabase.app/todos.json")
        const res = Object.keys(data).map((key) => {
          return {
            id: key,
            title: data[key].title,
            completed: data[key].completed
          }
        })
        console.log(res)
        todos.value = res
        loading.value = false
        } catch (e) {
          loading.value=false
          console.log(e.message)
        }
    }

    onMounted (fetchPost)
    
    
    return {
      alert,
      todos,
      loading,
      removeTodo,
      addTodo,
      fetchPost,
    }
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