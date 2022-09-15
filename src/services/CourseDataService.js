import http from "../http-common";

class CourseDataService {
  getAll() {
    return http.get("/");
  }
  get(course_number) {
    return http.get(`/${course_number}`);
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
    return http.get(`/name?name=${name}`);
  }
  findDept(dept) {
    return http.get(`/dept?dept=${dept}`);
  }
}
export default new CourseDataService();
