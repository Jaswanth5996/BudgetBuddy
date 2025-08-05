const mongoose = require('mongoose')

const dbserver = async() =>{
    try{
        await mongoose.connect(process.env.mongo_url);
    }
    catch(err){
        console.log('error connecting to the database');
        process.exit(1);
    }
}

export default dbserver