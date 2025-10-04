import { useContext, useEffect, useState } from "react";
import EmployeeContext from "./Context/EmployeeContext";
import validateFormData from "./utils/formValidation";
import { addEmployee, editEmployeeData } from "./apis/employeeApi";

function AddEmployee() {
  const {
    setEmployees,
    setToggleBtn,
    toggleBtn,
    editEmployee,
    setEditEmployee,
  } = useContext(EmployeeContext);
  const [employeeName, setEmployeeName] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeePosition, setEmployeePosition] = useState("");
  const [err, setErr] = useState({});

  // Adding employee
  // Validate Employee form data
  const handleFormValidation = () => {
    const errors = validateFormData(
      employeeName,
      employeeEmail,
      employeePosition
    );
    if (Object.keys(errors).length !== 0) {
      setErr(errors);
      return false;
    }
    setErr({});
    return true;
  };

  const handleAdd = async (employee) => {
    const result = await addEmployee(employee);
    setEmployees((prev) => [...prev, result.data]);
  };

  const handleOnChange = (setter, errorKey) => (e) => {
    setter(e.target.value);
    setErr((prev) => ({ ...prev, [errorKey]: "" }));
  };
  const handleToggleBtn = () => {
    setToggleBtn(!toggleBtn);
  };


  // Editing employee data
  useEffect(() => {
    if (editEmployee) {
      setEmployeeName(editEmployee.name);
      setEmployeeEmail(editEmployee.email);
      setEmployeePosition(editEmployee.position);
    }
  }, [editEmployee]);

  const handleSubmit = async () => {
    const isValid = handleFormValidation();
    if (!isValid) return;

    if (editEmployee) {
      const result = await editEmployeeData(editEmployee.id, {
        name: employeeName,
        email: employeeEmail,
        position: employeePosition,
      });

      setEmployees((prev) =>
        prev.map((e) => (e.id === editEmployee.id ? result.data : e))
      );
      setEditEmployee(null);
    } else {
      await handleAdd({
        name: employeeName,
        email: employeeEmail,
        position: employeePosition,
      });
    }

    setEmployeeName("");
    setEmployeeEmail("");
    setEmployeePosition("");
    setToggleBtn(false);
  };

  return (
    <>
      {toggleBtn && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div
            className="flex flex-col w-full h-full  gap-15 bg-white 
             xl:w-[45rem] xl:h-[30rem] xl:rounded-xl p-4"
          >
            <button
              onClick={handleToggleBtn}
              className="flex flex-row-reverse cursor-pointer"
            >
              x
            </button>

            {/* add Employee Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col h-full w-full gap-1">
                <label
                  className="flex flex-col text-sm  flex-row items-center justify-between"
                  htmlFor="name"
                >
                  NAME
                  {err.nameError && (
                    <div className="flex text-red-500 font-bold px-6 py-2 w-fit flex-row">
                      {err.nameError}
                    </div>
                  )}
                </label>
                <input
                  value={employeeName}
                  className="border-[1px] solid border-[#cecccc] p-[0.6rem] rounded-sm outline-none"
                  onChange={handleOnChange(setEmployeeName, "nameError")}
                  type="text"
                  name="name"
                  placeholder="e.g. Stephen King"
                  required
                />
              </div>

              <div className="flex flex-col h-full w-full gap-1">
                <label
                  className="flex flex-col text-sm  flex-row items-center justify-between"
                  htmlFor="name"
                >
                  EMAIL
                  {err.emailError && (
                    <div className="flex text-red-500 font-bold px-6 py-2 w-fit  flex-row">
                      {err.emailError}
                    </div>
                  )}
                </label>
                <input
                  value={employeeEmail}
                  className="border-[1px] solid border-[#cecccc] p-[0.6rem] rounded-sm outline-none"
                  onChange={handleOnChange(setEmployeeEmail, "emailError")}
                  type="email"
                  name="email"
                  placeholder="e.g. stephenking@lorem.com"
                  required
                />
              </div>

              <div className="flex flex-col h-full w-full gap-1">
                <label
                  className="flex flex-col text-sm  flex-row items-center justify-between"
                  htmlFor="name"
                >
                  POSITION
                  {err.positionError && (
                    <div className="flex text-red-500 font-bold px-6 py-2 w-fit  flex-row">
                      {err.positionError}
                    </div>
                  )}
                </label>
                <input
                  value={employeePosition}
                  className="border-[1px] solid border-[#cecccc] p-[0.6rem] rounded-sm outline-none"
                  onChange={handleOnChange(
                    setEmployeePosition,
                    "positionError"
                  )}
                  type="text"
                  name="position"
                  placeholder="e.g. SDE"
                  required
                />
              </div>
            </form>

            {/* Submit button */}
            <button
              onClick={handleSubmit}
              className="self-end py-4 px-8 rounded-md text-white font-semibold cursor-pointer bg-blue-400"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default AddEmployee;
