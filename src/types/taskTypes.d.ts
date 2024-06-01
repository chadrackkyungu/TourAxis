import { ObjectId } from 'mongoose';

export interface ITask {
    name: string;
    description: string;
    date_time: Date;
    next_execute_date_time: Date;
    status: 'pending' | 'done';
    user: ObjectId;
}

export interface ITaskUpdate extends Partial<Omit<ITask, 'user'>> {
    user?: ObjectId;
}
