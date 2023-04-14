import * as Yup from "yup";

export const ResetForgetPasswordSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(8).required("Please enter your password"),
  password_confirmation: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
