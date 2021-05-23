const controller = async (req, res) => {
  try {
    await res.status(200).json({ data: req.body.data }).end();
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

module.exports = controller;
