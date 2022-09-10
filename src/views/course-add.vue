<template>
  <div>
    <H1>Course Add</H1>
    <br>

    <form @submit.prevent="addCourse">
      <br>Name:
      <input v-model="course.name" type="text" id="name">
      <br>Credits:
      <input v-model="course.credits" type="text" id="credits">
      <br>
      <br>
      <input type="submit" name="submit" value="Save">
      <button name="cancel" v-on:click.prevent="cancel()">Cancel</button>
    </form>
  </div>
</template>

<script>
import httpCommon from "@/http-common.js";
export default {
  components: {
    UserDisplay
  },
  data() {
    return {
      course: {},
    }
  },

  methods: {
    addCourse() {
      httpCommon.addCourse(this.course)
        .then(() => {
          this.$router.push({ name: 'course' })
        })
        
        .catch(error => {
          if (error.response.status == '406') {
            console.log(error);
          }
        })
        
    },
    cancel() {
      this.$router.push({ name: 'course' })
    }
      
    
  }
}
</script>

<style scoped>
.error {
  color: #ff0000;
}
</style>
