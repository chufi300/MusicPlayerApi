const customHeader = (req, res, next) => {
  try {
    const apiKey = req.headers.api_key;
    if (apiKey === "fabri-01") {
      next();
    } else {
      res.status(403);
      res.send({ error: "API KEY NO ES CORRECTO" });
    }
  } catch (err) {
    res.status(403);
    res.send({ error: "HUBO UN ERROR" });
  }
};

module.exports = customHeader;
