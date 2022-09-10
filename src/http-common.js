import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:8081/api"
   //origin: "http://localhost:3001/course-t1"
   /*origin: "http://localhost:8081"*/,
  headers: {
    "Content-type": "application/json"
  },
  getCourses() {
    return apiClient.get("courses");
  },
  getCourse(id) {
    return apiClient.get("courses/" + id);
  },
  addCourse(c) {
    return apiClient.post("courses", course); 
  },
  updateCourse(courseId, c) {
    return apiClient.put("courses/" + courseId, course); 
  },
  deleteCourse(courseId) {
    return apiClient.delete("courses/" + courseId);
  }
});

