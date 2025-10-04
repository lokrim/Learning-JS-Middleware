const express = require('express');
const dataRouter = express.Router();

dataRouter.use((req, res, next) => {
    const timestamp = new Date().toLocaleTimeString();
    // req.originalUrl includes the full path, e.g., '/data/info'
    console.log(`[${timestamp}] Router Log 🚦: Method=${req.method}, URL=${req.originalUrl}`);
    next();
})

dataRouter.get('/info', (req, res) => {
    res.send("This is some info.");
})

module.exports = dataRouter;