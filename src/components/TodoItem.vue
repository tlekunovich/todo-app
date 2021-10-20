<template todo.completemplate>
  <li>
    <span :class="{ done: todo.completed }">
      <input type="checkbox" @change="markComplete" />
      <strong>{{ index + 1 }}.</strong>
      {{ todoProps.title }}
    </span>
    <button class="rm" @click="$emit('remove-todo', todoProps.id)">
     x
    </button>
  </li>
</template>

<script>

import { ref } from "vue";

export default {
  props: {
    todoProps: {
      type: Object,
      required: true,
    },
    index: Number,
  },
  
  setup: (props) => {
    const todo = ref(props.todoProps);
    const markComplete = () => {
      console.log("1", todo.value.completed);
      todo.value.completed = !todo.value.completed;
    };
    return {
      markComplete,
      todo,
    };
  },
};
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
  min-width: 900px;
  border-radius: 10px;
}
.rm {
  background: #EFEFEF;
  color: rgba(0, 0, 0,0.8);
  border-radius: 50%;
  font-weight: bold;
  width: 20px;
  height: 20px;
  border:1px solid rgb(90, 90, 90);
  display: flex;
  justify-content:center;
}
input {
  margin-right: 1rem;
  
}
.done {
  text-decoration: line-through;
}
</style>
