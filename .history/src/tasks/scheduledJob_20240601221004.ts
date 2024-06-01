import cron from 'node-cron';
import { formatISO, parseISO } from 'date-fns';
import taskModel from '../models/taskModel';

// Schedule job to run every minute
cron.schedule('* * * * *', async () => {
    try {

        const currentDate = new Date();
        // Extract the date part before the dot
        const isoString = currentDate.toISOString();
        const formattedDateStr = isoString.split('.')[0];
        const formattedDate = new Date(formattedDateStr);

        console.log("Cron job running at:", formattedDate.toISOString());

        const pendingTasks = await taskModel.find({
            status: 'pending',
            next_execute_date_time: { $lt: formattedDate }
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