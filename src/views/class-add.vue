<template>
  <div>
    <H1>To Do Add</H1>
    <UserDisplay />
    <br>

    <form @submit.prevent="addTodo">
      <br>Name:
      <input v-model="todo.name" type="text" id="name">
      <br>
      <br>
      <input type="submit" name="submit" value="Save">
      <button name="cancel" v-on:click.prevent="cancel()">Cancel</button>
    </form>
  </div>
</template>

<script>
import TodoServices from "@/services/TodoServices.js";
export default {
  components: {
    UserDisplay
  },
  data() {
    return {
      todo: {},
    }
  },

  methods: {
    addTodo() {
      TodoServices.addList(this.todo)
        .then(() => {
          this.$router.push({ name: 'list' })
        })
        
        .catch(error => {
          if (error.response.status == '406') {
            console.log(error);
          }
        })
        
    },
    cancel() {
      this.$router.push({ name: 'list' })
    }
      
    
  }
}
</script>

<style scoped>
.error {
  color: #ff0000;
}
</style>
