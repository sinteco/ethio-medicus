import { isEmail } from 'class-validator';
import { Schema } from 'mongoose';
// user interface
export interface User {
  name: string;
  lastname: string;
  email: string;
  password: string;
  createdDate:Date;
  _id:string
}

//user Schema
export const userschema = new Schema<User>({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  email: {type: String, required: true, validate: isEmail, unique: true,},
  password: {type: String, required: true},
  createdDate:{type: Date, default: Date.now}
});