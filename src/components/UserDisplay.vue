<template>
  <div>
    <span>Welcome {{this.user.firstName}} {{this.user.lastName}}</span>
    <a v-if="user.firstName!=null" href="#/logout">(logout)</a>
    
  </div>
</template>

<script>
import TodoServices from "@/services/TodoServices.js";
export default {
  data() {
    return {
      user: {},
    }
  },
  created() {
    TodoServices.getUser()
      .then((response) => {
        this.user = response.data.user;
      })
  }
}

</script>


<style>
</style>