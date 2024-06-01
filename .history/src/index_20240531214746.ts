import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import app from './app';

// * initialized the port
const port: number = parseInt(process.env.PORT as string, 10) || 3000;

//* initialize the database
const connect: string = process.env.DB_connect || "mongodb://localhost:27017/chadrackkyungu624";

mongoose.connect(connect)
  .then(() => console.log(`SUCCESSFULLY CONNECTED TO DATABASE 🔥👍 !!`))
  .catch((error) => {
    console.error("Database connection error:", error);
    console.log("Attempting to reconnect...");
    setTimeout(() => {
      mongoose.connect(connect).then(() => {
        console.log("Reconnected to database successfully 🔥👍 !!");
      }).catch((error) => {
        console.error("Reconnection attempt failed:", error);
      });
    }, 5000); // waits 5 seconds before trying to reconnect
  });

//* Running the port 
app.listen(port, () => {
  console.log(`LISTENING ON PORT 🏃🏃 ${port}...`)
});

//* Graceful shutdown logic
process.on('SIGINT', async () => {
  console.log('Gracefully shutting down...');

  //*Close the database connection
  await mongoose.connection.close();
  process.exit(0);

});
