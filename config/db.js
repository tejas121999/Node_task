const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try{
        await mongoose.connect(db, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex : true,
            useFindAndModify: false
        });
        
        console.log ('MongoDB Connect...');
    } catch (err) {
        console.error(err.massage);
        // Exact process with the failur
        process.exit(1);
    }
};

module.exports = connectDB