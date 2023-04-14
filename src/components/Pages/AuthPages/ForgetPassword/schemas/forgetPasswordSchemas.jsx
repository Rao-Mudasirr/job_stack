import * as Yup from "yup";

export const forgetPasswordSchemas = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
});