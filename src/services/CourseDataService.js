import http from "../http-common";

class CourseDataService {
  getAll() {
    return http.get("/");
  }
  get(id) {
    return http.get(`/${id}`);
  }
  create(data) {
    return http.post("/", data);
  }
  update(course_number, data) {
    return http.put(`/${course_number}`, data);
  }
  delete(id) {
    return http.delete(`/${id}`);
  }
  deleteAll() {
    return http.delete(`/`);
  }
  findName(name) {
    return http.get(`/name/${name}`);
  }
  findDept(dept) {
    return http.get(`/dept/${dept}`);
  }
}
export default new CourseDataService();
