import http from "../http-api";

class StudentDataService {
  getAll() {
    return http.get("/students");
  }

  get(id) {
    return http.get(`/students/${id}`);
  }

  create(data) {
    return http.post("/students", data);
  }

  findByTitle(name) {
    return http.get(`/students?name=${name}`);
  }
  // service update admin
  update(id, data) {
    return http.put(`/students/${id}`, data);
  }
  // service delete id
  delete(id) {
    return http.delete(`/students/${id}`);
  }
  // service delete all
  deleteAll() {
    return http.delete(`/students`);
  }
}
export default new StudentDataService();