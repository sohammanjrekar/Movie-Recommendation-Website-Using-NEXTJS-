import mongoose from "mongoose";
const {Schema}=mongoose;
const userSchema=new Schema(
        {
            firstname: {
                type: String,
                required: true,
            },
            lastname: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
                unique:true,
            },
            phone: {
                type: String,
                required: true,
            },
            message: {
                type: String,
                required: true,
            },
        },
        {
            timestamp: true,
        
});

export default mongoose.model("User",userSchema);