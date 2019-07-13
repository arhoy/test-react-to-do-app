const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
    console.log('Mongo connected!');
    } catch (error) {
        console.error('There as a db connection error',error.message);
        process.exit(1);
    }
}

module.exports = connectDB;