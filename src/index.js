const database = require("./config/database");

database.connect();
console.log(console.log('Is connected:', database.isConnected()));

// await database.disconnect();
