import EmployeeComponent from "./components/EmployeeComponent";
import EmployeeContext from "./components/Context/EmployeeContext";
import AddEmployee from "./components/AddEmployee";
import { useEffect, useState } from "react";
import { getEmployees } from "./components/apis/employeeApi";

function App() {
  const [employeeData, setEmployeeData] = useState({
    name: "",
    email: "",
    position: "",
  });
  const [employees, setEmployees] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null);
  const [toggleBtn, setToggleBtn] = useState(false);


  // Fetching all the employee data
  useEffect(() => {
    getEmployees()
      .then((res) => setEmployees(res.data))
      .catch((err) => console.error(err));
  }, []);


  return (
    <>
      <EmployeeContext.Provider
        value={{
          employeeData,
          setEmployeeData,
          toggleBtn,
          setToggleBtn,
          employees,
          setEmployees,
          editEmployee,
          setEditEmployee,
        }}
      >
        <div
          className={`flex flex-col w-full h-full min-h-screen bg-green-400`}
        >
          <div
            className={`flex flex-col lg:items-center lg:justify-center w-full h-full bg-[#f4f4f4]`}
          >
            <EmployeeComponent />
            {toggleBtn && <AddEmployee />}
          </div>
        </div>
      </EmployeeContext.Provider>
    </>
  );
}

export default App;
