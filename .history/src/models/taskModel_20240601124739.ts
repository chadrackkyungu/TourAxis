import { Schema, model } from 'mongoose';
import { ITask } from '../types/taskTypes';

const taskSchema = new Schema<ITask>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date_time: {
        type: Date,
        required: true,
    },
}, {
    timestamps: true,
});

export default model<ITask>('Task', taskSchema);
