import userModel from '../models/userModel';

export const createUserService = async (userDetails: { username: string, first_name: string, last_name: string }) => {
    const { username, first_name, last_name } = userDetails;

    if (!username || !first_name || !last_name) {
        throw new Error('Missing required user details');
    }

    const user = new userModel(userDetails);
    await user.save();
    return user;
};
