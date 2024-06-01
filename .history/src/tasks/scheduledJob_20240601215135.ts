import cron from 'node-cron';
import taskModel from '../models/taskModel';

// Schedule job to run every minute
cron.schedule('* * * * *', async () => {
    try {
        const currentDate = new Date();
        console.log("Cron job running at:", currentDate.toISOString());

        // Ensure the next_execute_date_time field is properly formatted and stored as Date type
        const pendingTasks = await taskModel.find({
            status: 'pending',
            next_execute_date_time: { $lt: currentDate }
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