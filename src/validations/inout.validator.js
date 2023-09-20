import * as yup from "yup";

export const validateInput = () =>
  yup.object({
    name: yup.string().required("Fill in the fields!"),
    email: yup.string().required("Fill in the fields!"),
    tel: yup.number().required("Fill in the fields!"),
  });
