import cron from 'node-cron';
import taskModel from '../models/taskModel';

// Schedule job to run every minute
cron.schedule('* * * * *', async () => {
    try {
        const pendingTasks = await taskModel.find({
            status: 'pending',
            next_execute_date_time: { $lt: new Date() }
        });

        pendingTasks.forEach(async task => {
            console.log(`Task ${task._id} - ${task.name} is due and will be marked as done.`);

            task.status = 'done';
            await task.save();
        });

    } catch (error) {
        console.error('Error in scheduled job:', error);
    }
});
