const ProductService = require("../../src/services/productService");
const mongoose = require("mongoose");
require("dotenv").config();

const uriStart = process.env.MONGODB_URI_START;
const uriEnd = process.env.MONGODB_URI_END;
const password = encodeURIComponent(process.env.MONGODB_PASSWORD);
const user = encodeURIComponent(process.env.MONGODB_USER);
const cluster = process.env.MONGODB_CLUSTER;
const connectionString = `${uriStart}${user}:${password}@${cluster}${uriEnd}`;

describe("Should perform CRUD on ProductService", () => {
    beforeAll(async() => {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    });
    afterAll(() => {
        mongoose.disconnect();
    });
    test("Create Product", async () => {
        const newProduct = {
            name: "testName",
            photos: [
                {
                    url: "testUrl",
                    description: "testDescription",
                }
            ]
        };
        const product = await ProductService.createProduct(newProduct);
        expect(product).toEqual(expect.objectContaining(newProduct));
    }, 30000);

    test("Update Product", async () => {
        const productToUpdate = {
            id: "65d6457188d3faff2224a75e",
            name: "testNameUpdate",
            photos: [
                {
                    url: "testUrl",
                    description: "testDescriptionUpdated",
                }
            ]
        };
        const product = await ProductService.updateProduct(productToUpdate);
        expect(product).toEqual(expect.objectContaining(productToUpdate));
    }, 30000);

    test("Delete Product", async () => {
        const productToDelete = "65d6457188d3faff2224a75e";
        const product = await ProductService.deleteProduct(productToDelete);
        expect(product).toEqual(expect.objectContaining(product));
    })
})