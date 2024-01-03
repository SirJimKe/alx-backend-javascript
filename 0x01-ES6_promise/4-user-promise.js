export default function signUpUser(firstName, lastName) {
  const userObject = {
    firstName,
    lastName,
  };

  return Promise.resolve(userObject);
}
