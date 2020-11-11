const INITIAL_STATE = {
  name: "",
};

export default function subReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "UPDATENAME":
      return {
        ...state,
        name: action.payload.name,
      };
    default:
      return state;
  }
}
