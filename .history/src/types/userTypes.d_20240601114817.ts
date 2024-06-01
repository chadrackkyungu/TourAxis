export interface IUser {
    username: string;
    first_name: string;
    last_name: string;
}

export interface IUserUpdate extends Partial<Omit<IUser, 'username'>> { }

