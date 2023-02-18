import { users } from "../data";

// VALIDATE PASSWORD - FIND USER AND THEN VALIDATE IF PW IS CORRECT (CASE SENSITIVE)
export const loginValidation = (user) => {
  return users.find((usersList) => {
    return (
      usersList.email === user.loginEmail &&
      usersList.password === user.loginPassword
    );
  });
};

///name
// export const getUser = () =>
