import { Schema } from 'mongoose';
// user interface
export interface User {
  name: string;
  lastname: string;
}

//user Schema
export const userschema = new Schema<User>({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
});