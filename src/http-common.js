import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:8081/api"
   //origin: "http://localhost:3001/course-t1"
   /*origin: "http://localhost:8081"*/,
  headers: {
    "Content-type": "application/json"
  },
  getClasses() {
    return apiClient.get("classes");
  },
  getClass(id) {
    return apiClient.get("classes/" + id);
  },
  addClass(c) {
    return apiClient.post("classes", c); //class is reserved, so we use c instead
  },
  updateList(classId, c) {
    return apiClient.put("classes/" + classId, c); 
  },
  deleteList(classId) {
    return apiClient.delete("classes/" + classId);
  }
});

