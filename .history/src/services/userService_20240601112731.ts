import userModel from '../models/userModel';
import { IUser } from '../types/userTypes';

export const createUserService = async (userDetails: IUser) => {
    const { username, first_name, last_name } = userDetails;

    if (!username || !first_name || !last_name) {
        throw new Error('Missing required user details');
    }

    const user = new userModel(userDetails);
    await user.save();
    return user;
};
