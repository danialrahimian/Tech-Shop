import type { Middleware } from "@reduxjs/toolkit";
import { teamMembers } from "../../data/About/about";
import { getAllTeamMember, getTeamMemberUrl } from "../store/aboutTeamMembers";

export const getAboutTeamMembers: Middleware =
  (store) => (next) => (action) => {
    const result = next(action);

    // اگر این اکشن از نوع getTeamMemberUrl بود (match type-safe)
    if (getTeamMemberUrl.match(action) && teamMembers.length) {
      store.dispatch(getAllTeamMember(teamMembers));
    }

    return result;
  };
