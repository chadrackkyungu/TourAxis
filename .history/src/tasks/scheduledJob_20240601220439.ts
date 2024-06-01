import cron from 'node-cron';
import { formatISO, parseISO } from 'date-fns';
import taskModel from '../models/taskModel';

// Schedule job to run every minute
cron.schedule('* * * * *', async () => {
    try {
        // Get the current date and time in UTC
        const currentDate = new Date();
        const utcCurrentDate = new Date(currentDate.toISOString());
        console.log("Cron job running at:", utcCurrentDate.toISOString());

        // Find tasks where next_execute_date_time is less than the current UTC date and time
        const pendingTasks = await taskModel.find({
            status: 'pending',
            next_execute_date_time: { $lt: utcCurrentDate }
        });

        if (pendingTasks.length === 0) {
            console.log("No pending tasks found.");
        } else {
            console.log("Pending tasks found:", pendingTasks);
        }

        for (const task of pendingTasks) {
            console.log(`Task ${task._id} - ${task.name} is due and will be marked as done.`);

            task.status = 'done';
            await task.save();
            console.log(`Task ${task._id} - ${task.name} status updated to done.`);
        }

    } catch (error) {
        console.error('Error in scheduled job:', error);
    }
});