const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("The custom error middleware is running.");
});

app.post('/create-item', (req, res, next) => {

    const { name } = req.body;

    if (!name || name.length < 3) {
    const validationError = new Error("Validation failed: 'name' must be at least 3 characters long.");
    validationError.status = 400;
    return next(validationError);
    }
    
    res.status(201).json({ message:`Item '${name}' created successfully.`});
})

const errorHandler = (err, req, res, next) => {
    console.error("error stack:", err.stack);
    const statusCode = err.status || 500;
    res.status(statusCode).json(
        {
            error: {
                message: err.message || "An erro occured",
                status: statusCode,
            },
        }
    )
}

app.use(errorHandler);

app.listen(port, () => {
    console.log("server running on port 3000");
});