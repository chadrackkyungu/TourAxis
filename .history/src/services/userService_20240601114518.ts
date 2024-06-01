import userModel from '../models/userModel';
import { IUser } from '../types/userTypes';

//******************************** Create User Service ********************************
export const createUserService = async (userDetails: IUser) => {
    const { username, first_name, last_name } = userDetails;

    if (!username || !first_name || !last_name) {
        throw new Error('Missing required user details');
    }

    const user = new userModel(userDetails);
    await user.save();
    return user;
};


//******************************** Update User Service********************************
export const updateUserService = async (userId: string, userDetails: IUser) => {
    const { first_name, last_name } = userDetails;

    if (!first_name || !last_name) {
        throw new Error('Missing required user details');
    }

    const updatedUser = await userModel.findByIdAndUpdate(userId, userDetails, { new: true });

    if (!updatedUser) {
        throw new Error('User not found');
    }

    return updatedUser;
};