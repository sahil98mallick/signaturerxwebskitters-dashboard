import validationText from "json/messages/validationText";
import * as yup from "yup";

export const PaymentInfoSchema = yup
  .object()
  .shape({
    accountName: yup.string().trim().required(validationText.error.accountName),
    priceMultiple: yup.string().trim(),
    dispensingFee: yup.string().trim(),
    MinimumItemCharge: yup.string().trim(),
    shortCode: yup
      .string()
      .trim()
      .email()
      .required(validationText.error.shortCode),
    accountNumber: yup
      .string()
      .trim()
      .required(validationText.error.accountNumber),
    medicationPricing: yup.boolean(),
    toogleAbility: yup.boolean()
  })
  .required();

export type PaymentInfoSchemaFormData = yup.InferType<typeof PaymentInfoSchema>;
