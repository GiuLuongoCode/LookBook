const OrderSwapService = require("../../src/services/orderSwapService");
const mongoose = require("mongoose");
require("dotenv").config();

const uriStart = process.env.MONGODB_URI_START;
const uriEnd = process.env.MONGODB_URI_END;
const password = encodeURIComponent(process.env.MONGODB_PASSWORD);
const user = encodeURIComponent(process.env.MONGODB_USER);
const cluster = process.env.MONGODB_CLUSTER;
const connectionString = `${uriStart}${user}:${password}@${cluster}${uriEnd}`;

describe("Should perform CRUD on OrderSwapService", () => {
  beforeAll(async () => {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });
  afterAll(() => {
    mongoose.disconnect();
  });
  test("Create OrderSwap", async () => {
    const newOrderSwap = {
      userFrom: "testUserFrom",
      userTo: "testUserTo",
      productOffered: "testProductOffered",
      productRequested: "testProductRequested",
    };
    const OrderSwap = await OrderSwapService.createOrderSwap(newOrderSwap);
    expect(OrderSwap).toEqual(expect.objectContaining(newOrderSwap));
  }, 30000);

  test("Update OrderSwap", async () => {
    const OrderSwapToUpdate = {
      userFrom: "testUserFrom",
      userTo: "testUserTo",
      productOffered: "testProductOffered",
      productRequested: "testProductRequested",
    };
    const OrderSwap = await OrderSwapService.updateOrderSwap(OrderSwapToUpdate);
    expect(OrderSwap).toEqual(expect.objectContaining(OrderSwapToUpdate));
  }, 30000);

  test("Delete OrderSwap", async () => {
    const OrderSwapToDelete = {
      userFrom: "testUserFrom",
      userTo: "testUserTo",
      productOffered: "testProductOffered",
      productRequested: "testProductRequested",
    };
    const OrderSwap = await OrderSwapService.deleteOrderSwap(OrderSwapToDelete);
    expect(OrderSwap).toEqual(expect.objectContaining(OrderSwapToDelete));
  });

  test("Get paginated orders with filters", async () => {
    const page = 1;
    const perPage = 1;
    const filters = { status: "pending" };
    const paginatedOrders = await OrderSwapService.getOrders({
      ...filters,
      page,
      perPage,
    });

    expect(paginatedOrders.currentPage).toBe(page);
    expect(paginatedOrders.perPage).toBe(perPage);
    expect(paginatedOrders.data.length).toBe(perPage);
  });
});
