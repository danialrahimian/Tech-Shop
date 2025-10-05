import type { formType, changeFormType } from "../../Types/contactTypes";
import { createSlice, createAction } from "@reduxjs/toolkit";
const initialState: formType = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const contactFormSlice = createSlice({
  name: "contactFormSlice",
  initialState,
  reducers: {
    changeFormValue: (
      FormValue: formType,
      action: { type: string; payload: changeFormType }
    ) => {
      for (const key in FormValue) {
        if (key === action.payload.name) {
          return {
            ...FormValue,
            [action.payload.name]: action.payload.value,
          };
        }
      }
    },
  },
});

export const startValidateForm = createAction(
  "startValidateForm",
  function prepare(trigger: string) {
    return {
      payload: {
        trigger,
      },
    };
  }
);

export const { changeFormValue } = contactFormSlice.actions;
export default contactFormSlice.reducer;
