import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getEmployees = () => api.get("/employees");

export const addEmployee = (employee) => api.post("/add-employee", employee);

export const deleteEmployee = (id) => api.delete(`/employees/${id}`);

export const editEmployeeData = (id, employee) => {
  return api.put(`/employees/${id}`, employee);
};
