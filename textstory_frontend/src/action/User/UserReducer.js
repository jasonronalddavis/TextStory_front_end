const userReducer = (state = { users: [], loading: false }, action) => {
    switch (action.type) {
      case "LOADING_CATS":
        return {
          ...state,
          user: [...state.user],
          loading: true,
        };
      case "ADD_CATS":
        return {
          ...state,
          user: action.user,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;