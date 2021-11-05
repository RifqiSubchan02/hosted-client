const initialState = {
  name: "Rifqi"
}

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: "Subchan"
      }

    default:
      return state
  }
}

export default globalReducer;