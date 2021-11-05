import axios from "axios";
import { domainApi } from "../../api";

export const setFormLogin = (formType, formValue) => {
  return {
    type: "SET_FORM_LOGIN",
    formType,
    formValue
  };
}

export const loginToApi = (form, history) => {
  const data = {
    email: form.email,
    password: form.password
  }

  axios.post(`${domainApi}/users/login`, data)
    .then(result => {
      localStorage.setItem("access_token", result.data.access_token);
      localStorage.setItem("role_type", result.data.role_type);
      history.push("/");
    })
    .catch(error => alert("Bad Request"))
}