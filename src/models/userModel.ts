import { Schema, model } from 'mongoose';
import { IUser } from '../types/userTypes';

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
  first_name: {
    type: String,
    required: [true, "First name is required"],
  },
  last_name: {
    type: String,
    required: [true, " Last name is required"],
  },
}, {
  timestamps: true,
});

export default model<IUser>('User', userSchema);
