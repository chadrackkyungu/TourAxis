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
    next_execute_date_time: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'done'],
        default: 'pending',
        required: true,
    },
    date_time: {
        type: Date,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "The user ID is required"],
    },
}, {
    timestamps: true,
});

export default model<ITask>('Task', taskSchema);
