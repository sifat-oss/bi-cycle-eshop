export type TFontSize = {
  xs: "12px";
  sm: "14px";
  base: "16px";
  md: "18px";
  lg: "20px";
  xl: "24px";
  xxl: "30px";
  xxxl: "36px";
  "2xl": "40px";
  "3xl": "48px";
  "4xl": "60px";
  "5xl": "72px";
  "6xl": "96px";
};

export const TFontSizeMap: TFontSize = {
  xs: "12px",
  sm: "14px",
  base: "16px",
  md: "18px",
  lg: "20px",
  xl: "24px",
  xxl: "30px",
  xxxl: "36px",
  "2xl": "40px",
  "3xl": "48px",
  "4xl": "60px",
  "5xl": "72px",
  "6xl": "96px",
};

export type TUser = {
  _id: string;
  email: string;
  name: string;
  password: string;
  needsPasswordChange: boolean;
  passwordChangedAt?: Date;
  role: "admin" | "customer";
  gender?: "male" | "female" | "others";
  dateOfBirth?: string;
  contactNo?: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress?: string;
  permanentAddress?: string;
  profileImg?: string;
  Orders: string;
  isBlocked: boolean;
  isDeleted: boolean;
};
