import { TOGGLE_NAVBAR_SUBTITLE, TOGGLE_NAVBAR } from "../action/header";

export const initialState = {
  toogleNavbar: true,
  toogleNavbarSubtitle: true,

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_NAVBAR:
      return {
        ...state,
        toogleNavbar: !state.toogleNavbar,
      };
    case TOGGLE_NAVBAR_SUBTITLE:
      return {
        ...state,
        toogleNavbarSubtitle: !state.toogleNavbarSubtitle,
      };
    default:
      return state;
  }
};

export default reducer;
