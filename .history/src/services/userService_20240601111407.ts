import userModel from '../models/userModel';

export const createUserService = async (userDetails: any) => {
    const userDet = await userModel.create({ userDetails });
    return userDet;
};
