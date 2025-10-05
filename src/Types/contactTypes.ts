export type formType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
export type errorType = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export type changeFormType = {
  name: string;
  value: string;
};
