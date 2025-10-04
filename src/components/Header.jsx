import EmployeeContext from "./Context/EmployeeContext";
import { useContext } from "react";

function Header() {
  const { toggleBtn, setToggleBtn } = useContext(EmployeeContext);
  
  return (
    <>
      <div
        className={`flex justify-between p-2 md:p-8  items-center w-full h-20`}
      >
        <span className={`font-semibold  text-lg md:text-3xl`}>
          Employee's Database
        </span>
        <button
          onClick={() => setToggleBtn(!toggleBtn)}
          className={`flex items-center bg-blue-400 rounded-lg text-sm cursor-pointer  md:gap-2  p-1 sm:p-2 `}
        >
          <span
            style={{ color: "white", fontWeight: "100" }}
            className="material-symbols-outlined"
          >
            add_circle
          </span>
          <span className={` text-white  bold-semibold`}>Add New Employee</span>
        </button>
      </div>
    </>
  );
}

export default Header;
