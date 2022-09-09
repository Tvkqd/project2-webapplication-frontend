import http from "../http-common";
class CourseDataService {
  getAll() {
    return http.get("/courses");
  }
  get(course_number) {
    return http.get(`/courses/${course_number}`);
  }
  create(data) {
    return http.post("/courses", data);
  }
  update(course_number, data) {
    return http.put(`/courses/${course_number}`, data);
  }
  delete(course_number) {
    return http.delete(`/courses/${course_number}`);
  }
  deleteAll() {
    return http.delete(`/courses`);
  }

  findByName(name) {
    return http.get(`/courses?name=${name}`);
  }
  /*
  findByDept(name) {
    return http.get(`/courses?dept=${dept}`);
  } */
}
export default new CourseDataService();