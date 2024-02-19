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
      "testName",
      [
        {
          url: "testUrl",
          description: "testDescription",
        }
      ]
    );
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockNewProduct);
  });

  test("Update Product", async () => {
    const req = {
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
      "testName",
      [
        {
          url: "testUrl",
          description: "testDescriptionUpdated", 
        }
      ]
    );
    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.json).toHaveBeenCalledWith(mockUpdateProduct);

  });

  test("Delete Product", async () => {
    const req = {
      body: {
        name: "testName",
        photos: [
          {
            url: "testUrl",
            description: "testDescription",
          },
        ],
      },
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
    ProductService.deleteProduct.mockResolvedValueOnce(mockDeleteProduct);

    await ProductController.deleteProduct(req, res);

    expect(ProductService.deleteProduct).toHaveBeenCalledWith(
      "testName",
      [
        {
          url: "testUrl",
          description: "testDescription", 
        }
      ]
    )
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockDeleteProduct);
  });
});
