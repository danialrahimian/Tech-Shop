import type { valueType, valuesType } from "../../Types/aboutTypes";
import { createSlice, createAction } from "@reduxjs/toolkit";

const aboutValue = createSlice({
  name: "aboutValue",
  initialState: [],
  reducers: {
    addValue: (
      values: valuesType,
      action: { type: string; payload: valueType }
    ) => {
      values.push(action.payload);
    },
    removeValue: (
      values: valuesType,
      action: { type: string; payload: valueType }
    ) => {
      values = values.filter((value) => value.id !== action.payload.id);
      return values;
    },
    editValueTitle: (
      values: valuesType,
      action: { type: string; payload: { id: number; name: string } }
    ) => {
      values = values.map((value) => {
        if (value.id === action.payload.id) {
          return {
            ...value,
            name: action.payload.name,
          };
        } else {
          return value;
        }
      });
    },
    editValueDescribtion: (
      values: valuesType,
      action: { type: string; payload: { id: number; describtion: string } }
    ) => {
      values = values.map((value) => {
        if (values.id === action.payload.id) {
          return {
            ...value,
            name: action.payload.describtion,
          };
        } else {
          return value;
        }
      });
    },
    getAllValue: (
      values: valuesType,
      action: { type: string; payload: valuesType }
    ) => {
      values = action.payload;
      return values;
    },
  },
});

export const getValuesUrl = createAction(
  "getValuesUrl",
  function prepare(url: string) {
    return {
      payload: {
        url,
      },
    };
  }
);

export const {
  addValue,
  removeValue,
  editValueTitle,
  editValueDescribtion,
  getAllValue,
} = aboutValue.actions;

export default aboutValue.reducer;
