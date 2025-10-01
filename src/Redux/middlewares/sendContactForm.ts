import { startValidateForm } from "../store/contactForm";
import { changeFormValue } from "../store/contactForm";
import type { Middleware } from "@reduxjs/toolkit";

export const formValidateMiddleWare: Middleware =
  (state) => (next) => (action) => {
    const result = next(action);
    if (startValidateForm.match(action)) {
      state.dispatch(changeFormValue(action.payload));
    }
    return result;
  };
