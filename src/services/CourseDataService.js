import http from "../http-common";

class CourseDataService {
  getAll() {
    return http.get("/");
  }
  get(course_number) {
    return http.get(`/${course_number}`);
  }
  create(data) {
    return http.post("/courses-t1", data);
  }
  update(course_number, data) {
    return http.put(`/courses-t1/${course_number}`, data);
  }
  delete(course_number) {
    return http.delete(`/courses-t1/${course_number}`);
  }
  deleteAll() {
    return http.delete(`/courses-t1`);
  }
  findName(name) {
    return http.get(`/courses-t1/name?name=${name}`);
  }
  findDept(dept) {
    return http.get(`/courses-t1/dept?dept=${dept}`);
  }
}
export default new CourseDataService();
