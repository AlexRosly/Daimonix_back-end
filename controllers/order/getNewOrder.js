const { Order } = require("../../models");

const getNewOrder = async (req, res) => {
  const result = await Order.find({ status: "new" });

  if (!result) {
    return res
      .status(409)
      .json({
        code: 409,
        message: `doesn't get new order`,
      })
      .end();
  }

  res
    .status(200)
    .json({
      status: "success",
      code: 200,
      result,
    })
    .end();
};

module.exports = getNewOrder;
