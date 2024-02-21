const OrderSwapController = require("../../src/controllers/orderSwapController");
const OrderSwapService = require("../../src/services/orderSwapService");

jest.mock("../../src/services/orderSwapService");

describe("OrderSwapController", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("createOrderSwap should return 201 with new OrderSwap", async () => {
    const req = {
      body: {
        userFrom: "testUserFrom",
        userTo: "testUserTo",
        productOffered: "testProductOffered",
        productRequested: "testProductRequested",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const mockNewOrderSwap = {
      body: {
        userFrom: "testUserFrom",
        userTo: "testUserTo",
        productOffered: "testProductOffered",
        productRequested: "testProductRequested",
      },
    };
    OrderSwapService.createOrderSwap.mockResolvedValueOnce(mockNewOrderSwap);
    await OrderSwapController.createOrderSwap(req, res);
    expect(OrderSwapService.createOrderSwap).toHaveBeenCalledWith(
      "testUserFrom",
      "testUserTo",
      "testProductOffered",
      "testProductRequested"
    );
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockNewOrderSwap);
  });

  test("Update OrderSwap", async () => {
    const req = {
      body: {
        userFrom: "testUserFrom",
        userTo: "testUserTo",
        productOffered: "testProductOffered",
        productRequested: "testProductRequested",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const mockUpdateOrderSwap = {
      userFrom: "testUserFrom",
      userTo: "testUserTo",
      productOffered: "testProductOffered",
      productRequested: "testProductRequested",
    };
    OrderSwapService.updateOrderSwap.mockResolvedValueOnce(mockUpdateOrderSwap);

    await OrderSwapController.updateOrderSwap(req, res);

    expect(OrderSwapService.updateOrderSwap).toHaveBeenCalledWith(
      "testUserTo",
      "testProductOffered",
      "testProductRequested"
    );
    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.json).toHaveBeenCalledWith(mockUpdateOrderSwap);
  });

  test("Delete OrderSwap", async () => {
    const req = {
      body: {
        userFrom: "testUserFrom",
        userTo: "testUserTo",
        productOffered: "testProductOffered",
        productRequested: "testProductRequested",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const mockDeleteOrderSwap = {
      userFrom: "testUserFrom",
      userTo: "testUserTo",
      productOffered: "testProductOffered",
      productRequested: "testProductRequested",
    };
    OrderSwapService.deleteOrderSwap.mockResolvedValueOnce(mockDeleteOrderSwap);

    await OrderSwapController.deleteOrderSwap(req, res);

    expect(OrderSwapService.deleteOrderSwap).toHaveBeenCalledWith(
      "testUserTo",
      "testProductOffered",
      "testProductRequested"
    );
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockDeleteOrderSwap);
  });
});
