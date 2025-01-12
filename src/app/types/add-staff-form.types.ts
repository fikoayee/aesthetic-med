export type addStaffFormValues = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  gender: string;
  role: string;
  specializations: string[];
  workingHours: {
    day: string;
    start: string;
    end: string;
    off: boolean;
  }[];
};
