import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    "username":String,
    "password":String,
    "phone":String,
    "email":String,
    "role":String
});

const user = mongoose.model('users',userSchema);

export default user;