import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  firstName:{ type: String, required: true },
  lastName:{ type: String, required: true },
  email: { type: String, required: true },
});
