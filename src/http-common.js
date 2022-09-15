import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:3001/course-t1"
   //origin: "http://localhost:3001/course-t1"
   /*origin: "http://localhost:8081"*/,
  headers: {
    "Content-type": "application/json"
  }
});