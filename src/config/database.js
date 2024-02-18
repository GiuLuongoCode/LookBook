const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const uriStart = process.env.MONGODB_URI_START;
const uriEnd = process.env.MONGODB_URI_END;
const password = encodeURIComponent(process.env.MONGODB_PASSWORD);
const user = encodeURIComponent(process.env.MONGODB_USER);
const cluster = process.env.MONGODB_CLUSTER;
const connectionString = `${uriStart}${user}:${password}@${cluster}${uriEnd}`;

class Database {
  constructor() {
    this.connected = false;
  }

  connect() {
    console.log("Connection string: ", connectionString);
    mongoose
      .connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        this.connected = true;
        console.log("MongoDB connected");
      })
      .catch((err) => {
        this.connected = false;
        console.error("MongoDB connection error:", err);
      });
  }

  isConnected() {
    return this.isConnected;
  }

  async disconnect() {
    if (this.isConnected) {
      await mongoose.disconnect();
      this.isConnected = false;
      console.log("MongoDB disconnected");
    }
  }
}

module.exports = new Database();
