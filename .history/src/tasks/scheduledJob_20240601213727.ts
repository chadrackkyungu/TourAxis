import cron from 'node-cron';
import taskModel from '../models/taskModel';

// Schedule job to run every minute
cron.schedule('* * * * *', async () => {
    try {
        console.log("Cron job running at:", new Date().toISOString());

        const pendingTasks = await taskModel.find({
            status: 'pending',
            next_execute_date_time: { $lt: new Date() }
        });

        if (pendingTasks.length === 0) {
            console.log("No pending tasks found.");
        } else {
            console.log("Pending tasks found:", pendingTasks);
        }

        pendingTasks.forEach(async task => {
            console.log(`Task ${task._id} - ${task.name} is due and will be marked as done.`);

            task.status = 'done';
            await task.save();
            console.log(`Task ${task._id} - ${task.name} status updated to done.`);
        });

    } catch (error) {
        console.error('Error in scheduled job:', error);
    }
});