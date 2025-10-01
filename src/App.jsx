import EmployeeComponent from "./components/EmployeeComponent";
import EmployeeContext from "./components/Context/EmployeeContext";
import AddEmployee from "./components/AddEmployee";
import { useState } from "react";

function App() {
  const [employeeData, setEmployeeData] = useState({ name: "", email: "" });
  const [toggleBtn, setToggleBtn] = useState(false);

  console.log("employeedata", employeeData);
  console.log("toggle button", toggleBtn);

  return (
    <>
      <EmployeeContext.Provider
        value={{ employeeData, setEmployeeData, toggleBtn, setToggleBtn }}
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
