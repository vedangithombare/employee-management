//   check mail format
const validateMail = (userEmail) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(userEmail);
};

const validateFormData = (employeeName, employeeEmail, employeePosition) => {
  const errObj = {};

  if (!employeeName.trim()) {
    errObj.nameError = "This field is required";
  }

  if (!employeeEmail.trim()) {
    errObj.emailError = "This field is required";
  } else if (!validateMail(employeeEmail)) {
    errObj.emailError = "Invalid mail";
  }

  if (!employeePosition.trim()) {
    errObj.positionError = "This field is required";
  }
  return errObj;
};

export default validateFormData;
