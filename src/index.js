const database = require("./config/database");
const exepress = require("express");
const router = exepress.Router();
const products = require("./routes/productRoutes");
const users = require("./routes/userRoutes");
const bodyParser =  require("body-parser");

database.connect();
console.log(console.log('Is connected:', database.isConnected()));

const app = exepress();
const port = 8000;

//body-parser config;
app.use(exepress.json())
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send(`<h1>Hello!</h1>`)
})

app.listen(port, () => {
    console.log(`Application is listening at port ${port}`);
})

//register the enpoint
app.use("/api/v1/products", products);
app.use("/api/v1/users", users);

// database.disconnect();
