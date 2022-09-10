<template>
  <div class="home">

    <H1>Classes List</H1>
    <br>
    <!-- using 'c' because 'class' is a keyword -->
    <ClassListDisplay v-for="c in classes" :key="c.id" :c="c" /> 
  </div>
</template>

<script>
// @ is an alias to /src
import httpCommon from '@/http-common.js';
import ClassListDisplay from '@/components/ClassListDisplay.vue' 

export default {
  // eslint-disable-next-line
  name: "Home",
  components: {
    ClassListDisplay,
  },
  data() {
    return {
      classes: [],
    };
  },
  created() {
    httpCommon.getClasses()
      .then((response) => {
        this.classes = response.data.classes;
      })
      .catch((error) => {
        console.log("There was an error:", error.response);
      });
  },
};
</script>
