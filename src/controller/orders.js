const { StatusCodes } = require("http-status-codes");
const { OrderService } = require("../services/index");

class OrderController {
  constructor() {
    this.orderService = new OrderService();
  }

  getAllOrders = async (req, res) => {
    try {
      const orders = await this.orderService.findAllOrders(req);
      //let result = orders.slice(start, end);
      res.status(StatusCodes.OK).json({
        message: "Fetched all Orders",
        data: orders,
        error: {},
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Data Could not be fetched",
        data: {},
        error: error,
      });
    }
  };

  filterOrder = async (req, res) => {
    try {
      console.log(req.query);
      const orders = await this.orderService.filterRecords(req);
      //let result = orders.slice(start, end);
      res.status(StatusCodes.OK).json({
        message: "Fetched all Orders",
        data: orders,
        error: {},
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Data Could not be fetched",
        data: {},
        error: error,
      });
    }
  };
}

module.exports = OrderController;
