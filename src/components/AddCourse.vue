<template>
  <v-card>
    <v-card-title>Add Course</v-card-title>
    
    <v-card-text>
      <v-form>
        <v-text-field 
                label="Name" 
                v-model="course.name"
        ></v-text-field>
        <v-text-field 
                label="Department" 
                v-model="course.dept"
        ></v-text-field>
        <v-text-field 
                label="Course Number" 
                v-model="course.course_number"
        ></v-text-field>
        <v-text-field 
                label="Level" 
                v-model="course.level"
        ></v-text-field>
        <v-text-field 
                label="Hours" 
                v-model="course.hours"
        ></v-text-field>
        <v-text-field 
                label="Description" 
                v-model="course.description"
        ></v-text-field>
    </v-form>
    
    </v-card-text>

   
    
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="gray" @click="save()">Submit</v-btn>
      <v-btn color="gray">Clear</v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
  </template>
  <script>
  import CourseDataService from "../services/CourseDataService";
  export default {
    name: "add-course",
    data() {
      return {
        course: {
          dept: "",
          course_number: "",
          level: "",
          hours: "",
          name: "",
          description: ""
        },
        submitted: false
      };
    },
    methods: {
      saveTutorial() {
        var data = {
          dept: this.course.dept,
          course_number: this.course.course_number,
          level: this.course.level,
          hours: this.course.hours,
          name: this.course.name,
          description: this.course.description
        };
        CourseDataService.create(data)
          .then(response => {
            this.course.course_number = response.data.course_number;
            console.log(response.data);
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
      },

      save() {
        var data = {
          dept: this.course.dept,
          course_number: this.course.course_number,
          level: this.course.level,
          hours: this.course.hours,
          name: this.course.name,
          description: this.course.description
        };
        CourseDataService.create(data)
          .then(response => {
            this.course.course_number = response.data.course_number;
            console.log(response.data);
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
      },
      
      newCourse() {
        this.submitted = false;
        this.course = {};
      }
    }
  };
  </script>
  <style>
  .submit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>