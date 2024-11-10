// src/api/middleware/errorMiddleware.js

// Error handling middleware
exports.errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
};
