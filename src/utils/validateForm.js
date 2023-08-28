export const checkValidation = (email, password) => {
  const emailValidation =
    /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
  const passwordValidation = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/.test(
    password
  );

  if (!emailValidation) return "Email provided is not valid";
  if (!passwordValidation) return "Password is not valid";

  return null;
};
