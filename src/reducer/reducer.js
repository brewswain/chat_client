export const initialState = { username: "bob" };

export const reducer = function reducer(state, action) {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: (state.username = action.payload) };

    default:
      return;
  }
};
