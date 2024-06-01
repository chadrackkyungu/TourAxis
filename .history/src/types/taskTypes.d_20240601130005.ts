import { ObjectId } from 'mongoose';

export interface ITask {
    name: string;
    description: string;
    date_time: Date;
    user: ObjectId;

export interface ITaskUpdate extends Partial<Omit<ITask, 'date_time' | 'user'>> {
    date_time?: Date;
    user?: ObjectId;
}
