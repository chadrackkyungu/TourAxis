import { Schema, model } from 'mongoose';
import { IUser } from '../types/userTypes';

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

export default model<IUser>('User', userSchema);
