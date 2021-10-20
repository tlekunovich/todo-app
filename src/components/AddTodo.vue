<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" />
    <button class="btn" type="submit">Create</button>
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
  //   axios.get("https://todo-36978-default-rtdb.europe-west1.firebasedatabase.app/todos.json").then(
  //     response => {
  //       console.log("get",response)
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
  width: 840px;
  height: 30px;
  margin-right: 5px;
  padding-left: 10px;
  margin-top: 10px;
  border: none;
  border-bottom: 1px solid black;
  padding-top: 10px;
  font-size: 16px;
  /* margin-left: 50px ; */
}
input:focus {
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  padding-top: 10px;
}

.btn {
  height: 30px;
  margin-top: 10px;
  width: 60px;
  background: none;
  background-color: rgba(179, 232, 120, 0.5);
  border: 1px solid rgba(150, 194, 100, 0.5);
  border-radius: 2px;
}
</style>
