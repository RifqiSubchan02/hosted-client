const initialState = {
  form: {
    email: "",
    password: ""
  }
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FORM_LOGIN":
      return {
        ...state,
        form: {
          ...state.form,
          [action.formType]: action.formValue
        }
      }

    default:
      return state
  }
}

export default loginReducer;