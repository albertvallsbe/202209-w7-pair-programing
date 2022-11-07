import { Schema, model } from "mongoose";

const userShema = new Schema({
  username: {
    required: true,
    unique: true,
    type: String,
  },
  password: {
    required: true,
    unique: true,
    type: String,
  },
  mail: {
    required: true,
    unique: true,
    type: String,
  },
});

// eslint-disable-next-line @typescript-eslint/naming-convention
const User = model("User", userShema, "users");

export default User;
