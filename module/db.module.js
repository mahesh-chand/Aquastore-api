const production = process.env.PROD
import mongoose from 'mongoose'
mongoose.connect(
    production === 'true' ? process.env.DB : process.env.LOCAL_DB
)
export default mongoose