<template>
    <div class="submit-form">
      <div v-if="!submitted">
        <div class="form-group">
          <label for="dept">Department</label>
          <input
            type="text"
            class="form-control"
            id="dept"
            required
            v-model="course.dept"
            name="dept"
          />
        </div>
        <div class="form-group">
          <label for="course_number">Course Number</label>
          <input
            type="text"
            class="form-control"
            id="course_number"
            required
            v-model="course.course_number"
            name="course_number"
          />
        </div>
        <div class="form-group">
          <label for="level">Level</label>
          <input
            type="text"
            class="form-control"
            id="level"
            required
            v-model="course.level"
            name="level"
          />
        </div>
        <div class="form-group">
          <label for="hours">Hours</label>
          <input
            type="text"
            class="form-control"
            id="hours"
            required
            v-model="course.hours"
            name="hours"
          />
        </div>
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            required
            v-model="course.name"
            name="name"
          />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <input
            class="form-control"
            id="description"
            required
            v-model="tutorial.description"
            name="description"
          />
        </div>
        <button @click="saveCourse" class="btn btn-success">Submit</button>
      </div>
      <div v-else>
        <h4>You submitted successfully!</h4>
        <button class="btn btn-success" @click="newCourse">Add</button>
      </div>
    </div>
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
          title: "",
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