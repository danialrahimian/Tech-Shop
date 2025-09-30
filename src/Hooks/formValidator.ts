import type { formType, errorType } from "../Types/contactTypes";
export const formValidator = (formState: formType) => {
  const newErrors: errorType = {};

  if (!formState.name.trim()) {
    newErrors.name = "Name is required";
  }

  if (!formState.email.trim()) {
    newErrors.email = "Email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formState.email)
  ) {
    newErrors.email = "Invalid email address";
  }

  if (!formState.subject.trim()) {
    newErrors.subject = "Subject is required";
  }

  if (!formState.message.trim()) {
    newErrors.message = "Message is required";
  }

  return Object.keys(newErrors).length === 0;
};
