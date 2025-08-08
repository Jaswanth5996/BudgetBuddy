const mongoose = require('mongoose')

const dbserver = async() =>{
    try{
        await mongoose.connect(process.env.mongo_url);
        console.log('connected to dbserver')
    }
    catch(err){
        console.log('error connecting to the database');
        process.exit(1);
    }
}

module.exports = dbserver;