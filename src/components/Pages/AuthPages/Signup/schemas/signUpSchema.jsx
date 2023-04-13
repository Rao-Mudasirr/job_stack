import * as Yup from "yup";

export const signUpSchema = Yup.object({
  first_name: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter your First name"),
  last_name: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter your Last name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  password_confirmation: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
