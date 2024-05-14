const { Order } = require("../../models");

const confirmOrder = async (req, res) => {
  const { id, statusAfterProcessing } = req.body;

  const updateStatus = await Order.findByIdAndUpdate(
    id,
    { statusAfterProcessing, status: "confirmed" },
    { new: true }
  );

  if (!updateStatus) {
    return res
      .status(404)
      .json({
        code: 404,
        message: `order doesn't created`,
      })
      .end();
  }

  res.json({
    code: 201,
    status: "succes",
    updateStatus,
  });
};

module.exports = confirmOrder;
