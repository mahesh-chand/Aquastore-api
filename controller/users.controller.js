import User from '../schema/users.schema.js'
import bcrypt from 'bcrypt';

//Signup
export const signup = async (req,res)=>{
    try {
        const data = req.body
        const user = new User(data)
        await user.save()
        res.status(200).json(user)
    }
    catch(err)
    {
        res.status(424).json({err: err.message})
    }
}

//Login
export const login= async (req,res)=>{
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})
        if(!user) return res.status(404).json({message: 'User doesn`t exist'})

        // user exist
        const hash = user.password
        const isAuth = await bcrypt.compare(password,hash)
        if(!isAuth) return res.status(401).json({message: 'Incorrect password'})

        // User login
        // res.cookie("accessToken","1234",{httpOnly: true}) // 5 min
        // res.cookie("refreshToken","1234",{httpOnly: true}) // 7 days
        // res.status(200).json({success: true})
    }
    catch(err)
    {
        res.status(424).json({err: err.message})
    }
}

//Fetch data from database
export const fetch = async (req,res)=>{
    const users = await User.find().populate('cart')
    if(users.length) return res.status(200).json(users)

    res.status(404).json({message: 'User collection is empty'})
}   

//Update users data in database
export const update = async (req,res)=>{
    try {
        const id = req.params.id
        const data = req.body
        await User.updateOne({_id: id},data)
        res.status(200).json({success: true})
    }
    catch(err)
    {
        res.status(424).json({err: err.message})
    }
}

//Delete users data in database
export const remove = async (req,res)=>{
    try {
        const id = req.params.id
        await User.deleteOne({_id: id})
        res.status(200).json({success: true})
    }
    catch(err)
    {
        res.status(424).json({err: err.message})
    }
}

