<template>
  <div>

    <H1>Classes List</H1>
    <UserDisplay />
    <br>
    <TodoDisplay v-for="list in lists" :key="list.id" :list="list"/> 
  </div>
</template>

<script>
import TodoDisplay from '@/components/TodoDisplay.vue' 
import TodoServices from "@/services/ClassServices.js";
export default {
  components: {
    TodoDisplay,
    UserDisplay
  },
  data() {
    return {
      lists: []
    }
  },
  created() {
    TodoServices.getLists()
      .then(response => {
        this.lists = response.data.lists
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
}
</script>

<style></style>
