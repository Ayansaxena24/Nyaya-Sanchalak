const mongoose = require('mongoose');

exports.connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (err) {
        console.error("MONGO_DB CONN ERR -> ", err);
    }
}