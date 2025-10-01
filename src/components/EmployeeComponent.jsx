import Header from "./Header";

function EmployeeComponent() {

  return (
    <>
      <div
        className={`flex flex-col w-full h-full 
             xl:w-[75rem] xl:h-[40rem] bg-[#fdf9f9] xl:rounded-xl`}
      >
        <Header />
        {/* scrolling here */}
        <div className={` flex flex-1 flex-col p-2  `}>
          <div className={`overflow-x-auto`}>
            <table className=" w-full min-w-[70rem] bg-red-400 ">
              <thead className="  ">
                <tr className={`border-b border-b-[#dae0e8] `}>
                  <th className="text-[#c1b6b6] text-sm font-semibold">
                    EMPLOYEE ID
                  </th>
                  <th className="text-[#c1b6b6] text-sm font-semibold">NAME</th>
                  <th className="text-[#c1b6b6] text-sm font-semibold">
                    EMAIL
                  </th>
                  <th className="text-[#c1b6b6] text-sm font-semibold">
                    ACTION
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeComponent;

/*<div
            className={`flex justify-between p-4 border-b border-b-1 border-b-[#dae0e8] items-center  w-full h-15 `}
          >
            <span className="text-[#c1b6b6] text-sm font-semibold">
              EMPLOYEE ID
            </span>
            <span className="text-[#c1b6b6] text-sm font-semibold">NAME</span>
            <span className="text-[#c1b6b6] text-sm font-semibold">EMAIL</span>
            <span className="text-[#c1b6b6] text-sm font-semibold">ACTION</span>
          </div>
          <div className={`flex flex-1 flex-col gap-2 bg-green-300`}>
            <div className={`flex justify-between w-full p-4 h-15 bg-red-400`}>
              <span className={`flex text-md items-center`}>1</span>
              <span className={`flex text-md items-center`}>
                Vedangi Thombare
              </span>
              <span className={`flex text-md items-center`}>
                tvedangi@gmail.com
              </span>
              <span className={`flex flex-row gap-2`}>
                <span class="material-symbols-outlined">edit</span>
                <span class="material-symbols-outlined">delete</span>
              </span>
            </div>
          </div>
*/
