import type { formType } from "../../Types/contactTypes";
import { createSlice, createAction } from "@reduxjs/toolkit";

const contactFormSlice = createSlice({
  name: "contactFormSlice",
  initialState: {},
  reducers: {
    changeFormValue: (
      FormValue: formType,
      action: { type: string; payload: { name: string; value: string } }
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
