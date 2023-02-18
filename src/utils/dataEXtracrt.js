import { users } from "../data";

export const loginValidation = (user) => {
  return users.find((usersList) => {
    return (
      usersList.email === user.loginEmail &&
      usersList.password === user.loginPassword
    );
  });
};
