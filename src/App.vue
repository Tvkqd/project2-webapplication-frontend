<template>
  <v-app>
    <v-app-bar
      app
      color="blue lighten-5"
      dark
    >
      <div class="d-flex align-center">
        <component v-bind:is="component" />
        <a href="https://www.oc.edu/">
          <v-img
          alt="OC Logo"
          class="shrink mr-2"
          contain
          src="OC-Logo.png"
          transition="scale-transition"
          width="130"
        />
        </a>
        <v-btn
        @click="course()"
        text
        color="red darken-4"
        >Courses</v-btn>
      
       <!--  <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      </div>

      <v-spacer></v-spacer>

    <!--   <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <ListView/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Course from './components/Course';
import CoursesList from './components/CoursesList.vue';
import ListView from './views/List-View.vue';
import AddCourse from './components/AddCourse.vue';
import AboutApp from './views/About-App.vue';




export default {
  name: 'App',

  components: {
    HelloWorld,
    // AddCourse,
    Course,
    CoursesList,
    ListView,
    AddCourse,
    AboutApp,
},

  data: () => ({
    //
  }),
  methods: {
    course(){
      return{
        component: "Course"
      }
    }
  }
};
</script>
