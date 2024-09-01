//request logging
const reqLogger = (req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
};

// 404 Middleware for handling "Not Found" routes
const notFound = (req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Resource not found",
        path: req.originalUrl,
        rootPath: req.get('host')
    });
};

module.exports = {notFound, reqLogger}