import dotenv from 'dotenv';
import mongoose, { ConnectOptions } from 'mongoose';

dotenv.config();

async function dbConnect(): Promise<void> {
  try {
    const MONGODB_URI: string | undefined = process.env.MONGODB_URI;
    console.log('Error');
    console.log(MONGODB_URI);
    if (!MONGODB_URI) {
      throw new Error(
        'Please define the MONGODB_URI environment variable inside .env'
      );
    }

    /**
     * Global is used here to maintain a cached connection across hot reloads
     * in development. This prevents connections growing exponentially
     * during API Route usage.
     */
    let cached = global.mongoose;

    if (!cached) {
      cached = global.mongoose = { conn: null, promise: null };
    }
    if (cached.conn) {
      return cached.conn;
    }

    if (!cached.promise) {
      const opts = {
        // bufferCommands: false,
        useNewUrlParser: true,
        // useUnifiedTopology: true,
      };

      cached.promise = mongoose
        .connect(MONGODB_URI as string, opts as ConnectOptions)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((mongoose: any) => {
          console.log('Connect to db successfully!!');
          return mongoose;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    console.log(error);
  }
}

export default dbConnect;
