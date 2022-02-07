import { Connection } from 'mongoose';

declare global {
  var mongoose: any;
  var NODE_ENV: string;
  var PORT: string;
  var MONGODB_URI: string;
}

export const mongoose = global.mongoose || new Connection();

if (process.env.NODE_ENV !== 'production') global.mongoose = mongoose;
