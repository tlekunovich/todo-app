<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" />
    <button type="submit">Create</button>
  </form>
</template>

<script>
// import axios from 'axios' 

export default {

 
  props: ["todos"],
  data() {
    return {
      title: "",
      };
  },
  // mounted(){
  //   axios.get("https://todo-36978-default-rtdb.europe-west1.firebasedatabase.app/todo.json", this.todos).then(
  //     response => {
  //       console.log(response)
  //     }
  //   )
  // },
  methods: {
    onSubmit() {
      console.log("submit", this.title);
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false,
        };
        this.$emit("addTodo", newTodo);
        this.title = "";
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
}

input {
    min-width: 60%;
    height: 20px; 
    margin-right:5px;
    padding-left: 10px;
}
</style>
