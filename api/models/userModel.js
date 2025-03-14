import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required : true,
        unique : true,
    },
    email:{
        type : String,
        required : true,
        unique :true,
    },
    password:{
        type : String,
        required : true
    },
    profilePicture:{
        type:String,
        default:"https://tse1.mm.bing.net/th?id=OIP.pXL0MqW_4A1OgxUpNbngmAHaHa&pid=Api&rs=1&c=1&qlt=95&w=104&h=104"
    }

},{timestamps:true})

const User = mongoose.model('User',userSchema)
export default User