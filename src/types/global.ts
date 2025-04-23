import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TResponse<T> = {
  data?: T;
  error?: TError;
  success: boolean;
  message: string;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};

export type TUserFromToken = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};

export type TSelectUser = {
  email: string;
  role: string;
  iat: number;
  exp: number;
};

interface Transaction {
  id: string;
  method: string;
  bank_status: string;
  user: string;
}

export interface OrderShow {
  _id: string;
  user: string;
  transaction: Transaction;
  totalPrice: number;
  status: string;
  createdAt: string;
}

export interface UserProfile {
  _id?: string;
  name: string;
  email: string;
  gender?: string;
  dateOfBirth?: string;
  contactNo?: string;
  bloodGroup?: string;
  presentAddress?: string;
  permanentAddress?: string;
  profileImg?: File;
}

export type TUserResponse = {
  _id: string;
  email: string;
  role: string;
  name: string;
  Orders: string[];
  needsPasswordChange: boolean;
  gender?: "male" | "female" | "others";
  dateOfBirth?: string;
  contactNo?: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress?: string;
  permanentAddress?: string;
  profileImg?: string;
  isBlocked: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};
