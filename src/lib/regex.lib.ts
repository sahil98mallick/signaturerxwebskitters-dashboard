const upperCaseRegex = /[A-Z]/;
const numberRegex = /[0-9]/;
const lowerCaseRegex = /[a-z]/;
const symbolRegex = /["!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]/;
const phoneNumberRegex = /^\d+$/;
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
const positiveNumberRegex = /^\d*\.?\d+$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export {
  emailRegex,
  lowerCaseRegex,
  numberRegex,
  passwordRegex,
  phoneNumberRegex,
  positiveNumberRegex,
  symbolRegex,
  upperCaseRegex
};
