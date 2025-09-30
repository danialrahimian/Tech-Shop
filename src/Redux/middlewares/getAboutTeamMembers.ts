import { teamMembers } from "../../data/About/about";
import { getAllTeamMember } from "../store/aboutTeamMembers";
import { getTeamMemberUrl } from "../store/aboutTeamMembers";
export const getAboutTeamMembers = (state) => (next) => (action) => {
  const result = next(action);

  if (action.type === getTeamMemberUrl.type && teamMembers.length) {
    state.dispatch(getAllTeamMember(teamMembers));
  }
  return result;
};
