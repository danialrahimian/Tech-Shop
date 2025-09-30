import type { ReactNode } from "react";

export type teamMemberType = {
  id: number;
  name: string;
  position: string;
  avatar: string;
  bio: string;
};
export type teamMembersType = teamMemberType[];

export type valueType = {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
};

export type valuesType = valueType[];
