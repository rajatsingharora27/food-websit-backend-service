const { StatusCodes } = require("http-status-codes");
var mongoose = require("mongoose");
const { orderCollection } = require("../config/database-config");
const RepositoryError = require("../Error/repositoryError");

class OrderService {
  findAllOrders = async (req) => {
    const oc = orderCollection();
    try {
      const page = Number(req?.query?.page) || 1;
      const limit = Number(req?.query?.limit) || 3;
      const start = (page - 1) * limit;
      const end = page * limit;
      let results = {};
      const orders = await oc.find({}).skip(start).limit(limit).toArray();
      if (end < orders.length) {
        results.next = {
          page: page + 1,
          limit: limit,
        };
      }
      if (start > 0) {
        results.previous = {
          page: page - 1,
          limit: limit,
        };
      }

      // orders.push(results);

      return [{ pageInfo: results, orders: orders }];
    } catch (err) {
      throw new RepositoryError(
        "Repository Error",
        "Data could not be fetched",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  };

  filterRecords = async (req) => {
    const oc = orderCollection();
    try {
      const records = await oc
        .find({
          $or: [
            { status: { $in: req?.query?.status } },
            { delevirySolt: req?.query?.delevirySolt },
            { name: { $regex: ".*" + req?.query?.name + ".*", $options: "i" } },
          ],
        })
        .toArray();
      return records;
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = OrderService;
