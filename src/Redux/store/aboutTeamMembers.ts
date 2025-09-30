import type { teamMemberType, teamMembersType } from "../../Types/aboutTypes";
import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState: teamMembersType = [];

const aboutTeamMembers = createSlice({
  name: "aboutTeamMembers",
  initialState,
  reducers: {
    addTeamMember: (
      teamMembers: teamMembersType,
      action: { type: string; payload: teamMemberType }
    ) => {
      teamMembers.push(action.payload);
    },
    removeTeamMember: (
      teamMembers: teamMembersType,
      action: { type: string; payload: teamMemberType }
    ) => {
      teamMembers = teamMembers.filter(
        (teamMember) => teamMember.id !== action.payload.id
      );
      return teamMembers;
    },
    editTeamMemberName: (
      teamMembers: teamMembersType,
      action: { type: string; payload: { id: number; name: string } }
    ) => {
      teamMembers = teamMembers.map((teamMember) => {
        if (teamMember.id === action.payload.id) {
          return {
            ...teamMember,
            name: action.payload.name,
          };
        } else {
          return teamMember;
        }
      });
    },
    editTeamMemberBio: (
      teamMembers: teamMembersType,
      action: { type: string; payload: { id: number; describtion: string } }
    ) => {
      teamMembers = teamMembers.map((teamMember) => {
        if (teamMember.id === action.payload.id) {
          return {
            ...teamMember,
            name: action.payload.describtion,
          };
        } else {
          return teamMember;
        }
      });
    },
    getAllTeamMember: (
      teamMembers: teamMembersType,
      action: { type: string; payload: teamMembersType }
    ) => {
      teamMembers = action.payload;
      return teamMembers;
    },
  },
});

export const getTeamMemberUrl = createAction(
  "getTeamMemberUrl",
  function prepare(url: string) {
    return {
      payload: {
        url,
      },
    };
  }
);

export const {
  addTeamMember,
  removeTeamMember,
  editTeamMemberName,
  editTeamMemberBio,
  getAllTeamMember,
} = aboutTeamMembers.actions;

export default aboutTeamMembers.reducer;
