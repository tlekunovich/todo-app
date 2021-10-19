<template todo.completemplate>
  <li>
    <span :class="{ done: todo.completed }">
      <input type="checkbox" v-on:change="markComplete" />
      <strong>{{ index + 1 }}</strong>
      {{ todoProps.title }}
    </span>
    <button class="rm" @click="$emit('remove-todo', todoProps.id)">
      &times;
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
}
.rm {
  background: red;
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
}
input {
  margin-right: 1rem;
}
.done {
  text-decoration: line-through;
}
</style>
