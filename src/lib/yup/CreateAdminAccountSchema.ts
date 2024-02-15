import validationText from "json/messages/validationText";
import {
  lowerCaseRegex,
  numberRegex,
  symbolRegex,
  upperCaseRegex
} from "lib/regex.lib";
import * as yup from "yup";

export const CreateAccountSchema = yup
  .object()
  .shape({
    name: yup.string().trim().required(validationText.error.fullName),
    email: yup
      .string()
      .trim()
      .email()
      .required(validationText.error.enter_email),
    password: yup
      .string()
      .required(validationText.error.enter_password)
      .min(8, validationText.error.passwordTooShort)
      .test(
        "isValidPass",
        validationText.error.isValidPass,
        (value: any, context: any) => {
          const hasUpperCase = upperCaseRegex.test(value);
          const hasNumber = numberRegex.test(value);
          const hasLowerCase = lowerCaseRegex.test(value);
          const hasSymbole = symbolRegex.test(value);
          let validConditions = 0;
          const numberOfMustBeValidConditions = 3;
          const conditions = [
            hasUpperCase,
            hasLowerCase,
            hasNumber,
            hasSymbole
          ];
          conditions.forEach((condition) =>
            condition ? validConditions++ : null
          );
          if (validConditions >= numberOfMustBeValidConditions) {
            return true;
          }
          return false;
        }
      ),
    confirmpassword: yup
      .string()
      .required(validationText.error.enter_password_confirm)
      .test(
        "password-match",
        validationText.error.password_match,
        function (value) {
          return value === this.resolve(yup.ref("password"));
        }
      )
  })
  .required();

export type CreateAccountSchemaFormData = yup.InferType<
  typeof CreateAccountSchema
>;
