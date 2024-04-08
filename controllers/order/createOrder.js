const { Order } = require("../../models");

const createOrder = async (req, res) => {
  console.log("object", req.body);
  const result = await Order.create({ ...req.body });

  if (!result) {
    return res
      .status(409)
      .json({
        code: 409,
        message: `order doesn't created`,
      })
      .end();
  }

  res
    .status(201)
    .json({
      status: "success",
      code: 201,
      result,
    })
    .end();
};

module.exports = createOrder;
