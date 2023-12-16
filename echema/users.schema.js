import mongoose from 'mongoose';
const { Schema } = mongoose

const userModel = Schema({
    firstname: { type: String, required: [true, 'firstname is required'] },
    lastname: { type: String, required: [true, 'lastname is required'] },
    telephone: { type: String, required: [true, 'telephone is required'] },
    email: { type: String, required: [true, 'Email is required'] },
    password: { type: String, required: [true, 'Password is required'] },
    token: String,
    // cart: [{ type: Schema.ObjectId, ref: 'Product' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const User = mongoose.model('User', userModel)
export default User