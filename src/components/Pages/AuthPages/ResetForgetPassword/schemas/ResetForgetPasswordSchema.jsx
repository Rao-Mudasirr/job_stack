import * as Yup from "yup";

export const ResetForgetPasswordSchema = Yup.object({
  reset_code: Yup.string()
    .min(2)
    .max(40)
    .required("Please enter reset code"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(8).required("Please enter your password"),
  password_confirmation: Yup.string()
  .required("Confirm password is required")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
