const ProductController = require("../../src/controllers/productController");
const ProductService = require("../../src/services/productService");

jest.mock("../../src/services/productService");

describe("ProductController", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("createProduct should return 201 with new Product", async () => {
    const req = {
      body: {
        name: "testName",
        photos: [
          {
            url: "testUrl",
            description: "testDescription",
          },
        ],
      }
    }
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const mockNewProduct = {
      name: "testName",
      photos: [
        {
          url: "testUrl",
          description: "testDescription",
        },
      ],
    }
    ProductService.createProduct.mockResolvedValueOnce(mockNewProduct);
    await ProductController.createProduct(req, res);
    expect(ProductService.createProduct).toHaveBeenCalledWith(
      {name:"testName",
      photos: [
        {
          url: "testUrl",
          description: "testDescription",
        }
      ]
    }
    );
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockNewProduct);
  });

  test("Update Product", async () => {
    const req = {
      params: {
        id: "65d6457188d3faff2224a75e"
      },
      body: {
        name: "testName",
        photos: [
          {
            url: "testUrl",
            description: "testDescriptionUpdated",
          },
        ],
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const mockUpdateProduct = {
      id: "65d6457188d3faff2224a75e",
      name: "testName",
      photos: [
        {
          url: "testUrl",
          description: "testDescriptionUpdated",
        },
      ],
    };
    ProductService.updateProduct.mockResolvedValueOnce(mockUpdateProduct);

    await ProductController.updateProduct(req, res);

    expect(ProductService.updateProduct).toHaveBeenCalledWith(
      {id: "65d6457188d3faff2224a75e",
        name: "testName",
      photos: [
        {
          url: "testUrl",
          description: "testDescriptionUpdated", 
        }
      ]
    }
    );
    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.json).toHaveBeenCalledWith(mockUpdateProduct);

  });

  test("Delete Product", async () => {
    const req = {
      params: {
        id: "65d6457188d3faff2224a75e"
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const mockDeleteProduct = {
      name: "testName",
      photos: [
        {
          url: "testUrl",
          description: "testDescription",
        },
      ],
    };
    ProductService.deleteProduct.mockResolvedValueOnce("65d6457188d3faff2224a75e");

    await ProductController.deleteProduct(req, res);

    expect(ProductService.deleteProduct).toHaveBeenCalledWith(
      "65d6457188d3faff2224a75e"
    )
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockDeleteProduct);
  });
});
