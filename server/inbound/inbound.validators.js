module.exports = {
  validateEmpty: (req, res, next) => {
    let data = req.body.data;
    if (typeof data !== "string" || data.length === 0) {
      return res
        .status(204)
        .send({
          error: "empty value",
        })
        .end();
    }
    next();
  },
};
