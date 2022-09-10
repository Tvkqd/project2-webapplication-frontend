<template>
  <div course="home">

    <H1>Courses List</H1>
    <br>

    <CourseListDisplay v-for="course in coursees" :key="course.id" :course="course" /> 
  </div>
</template>

<script>
// @ is an alias to /src
import httpCommon from '@/http-common.js';
import CourseListDisplay from '@/components/CourseListDisplay' 

export default {
  // eslint-disable-next-line
  name: "Home",
  components: {
    CourseListDisplay,
  },
  data() {
    return {
      courses: [],
    };
  },
  created() {
    httpCommon.getCourses()
      .then((response) => {
        this.courses = response.data.courses;
      })
      .catch((error) => {
        console.log("There was an error:", error.response);
      });
  },
};
</script>
