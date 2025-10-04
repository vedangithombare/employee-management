import { useContext } from "react";
import EmployeeContext from "./Context/EmployeeContext";
import Header from "./Header";
import { deleteEmployee } from "./apis/employeeApi";

function EmployeeComponent() {
  const {
    employees,
    setEmployees,
    setToggleBtn,
    setEditEmployee,
  } = useContext(EmployeeContext);

  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id);
      setEmployees((prev) => prev.filter((employee) => employee.id !== id));
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div
        className={`flex flex-col w-full h-full 
             xl:w-[75rem] xl:h-[40rem] bg-[#fdf9f9] xl:rounded-xl`}
      >
        <Header />
        <div className={` flex flex-1 flex-col p-2  `}>
          <div className={`overflow-x-auto`}>
            <div className="max-h-[34rem] overflow-y-auto">
              <table className=" w-full md:min-w-[70rem]">
                {/* Table Header */}
                <thead className=" bg-gray-200 sticky top-0 z-10">
                  <tr className="border-b border-b-[#dae0e8]">
                    <th className="w-[10%] px-4 py-3 text-center text-[#c1b6b6] text-sm font-semibold">
                      EMPLOYEE ID
                    </th>
                    <th className="w-[30%] px-4 py-3 text-center text-[#c1b6b6] text-sm font-semibold">
                      NAME
                    </th>
                    <th className="w-[30%] px-4 py-3 text-center text-[#c1b6b6] text-sm font-semibold">
                      EMAIL
                    </th>
                    <th className="w-[30%] px-4 py-3 text-center text-[#c1b6b6] text-sm font-semibold">
                      POSITION
                    </th>
                    <th className="w-[20%] px-4 py-3 text-center text-[#c1b6b6] text-sm font-semibold">
                      ACTION
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                  {employees.map((emp) => {
                    return (
                      <tr id={emp.id} className="border-b border-b-[#dae0e8]">
                        <td className="px-6 py-3 text-center">{emp.id}</td>
                        <td className="px-6 py-3 text-center">{emp.name}</td>
                        <td className="px-6 py-3 text-center">{emp.email}</td>
                        <td className="px-6 py-3 text-center">
                          {emp.position}
                        </td>
                        <td className="px-6 py-3 text-center">
                          <div className="flex gap-2 justify-center">
                            <span
                              onClick={() => {
                                setToggleBtn(true);
                                setEditEmployee(emp);
                              }}
                              className=" cursor-pointer "
                            >
                              edit
                            </span>
                            <span
                              onClick={() => handleDelete(emp.id)}
                              className=" cursor-pointer "
                            >
                              delete
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeComponent;
