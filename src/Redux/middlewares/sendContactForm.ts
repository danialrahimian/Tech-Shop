import { startValidateForm } from "../store/contactForm";
import { changeFormValue } from "../store/contactForm";

export const formValidateMiddleWare = (state) => (next) => (action) => {
  const result = next(action);
  if (action.type === startValidateForm.type) {
    state.dispatch(changeFormValue(action.payload));
  }
  return result;
};
