const mongoose = require("mongoose");

class Database {
    constructor() {
        this.isConnected = false;
        this.connect();
    }

    connect() {
        mongoose.connect('mongodb://localhost:27017/mydatabase', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            this.isConnected = true;
            console.log('MongoDB connected');
        })
        .catch(err => {
            this.isConnected = false;
            console.error('MongoDB connection error:', err);
        });
    }

    isConnected() {
        return this.isConnected;
    }

    async disconnect() {
        if (this.isConnected) {
            await mongoose.disconnect();
            this.isConnected = false;
            console.log('MongoDB disconnected');
        }
    }
}

module.exports = new Database();
