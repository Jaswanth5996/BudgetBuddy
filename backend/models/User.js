const mongoose = require('mongoose')

const Saving = new mongoose.Schema({

})

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,required:true},
    mobile:{type:String,required:true,maxlength:10}
});

const User = mongoose.model('User',userSchema)

export default User;