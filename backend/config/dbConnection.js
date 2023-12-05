const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
exports.connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (err) {
    console.error("MONGO_DB CONN ERR -> ", err);
  }
};
