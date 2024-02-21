const  express =  require("express");
const router = express.Router();
const ProductController = require("../controllers/productController");


router.post("/", ProductController.createProduct);
router.put("/product/:id", ProductController.updateProduct);
router.delete("/product/:id", ProductController.deleteProduct);

module.exports =  router;