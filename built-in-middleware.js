// 1. Explore built-in middleware in Express (e.g., express. Json()). Implement
// middleware functions for parsing JSON data in incoming requests.
// ii. Develop and apply custom middleware in Express. Log information about
// incoming requests using a middleware function.

const express = require('express');
const app = express();
const port = 3000;

// Built-in middleware to parse JSON data
app.use(express.json());

app.post('/about', (req, res) => {
    const data = req.body;
    console.log(data);
    res.send(`successfully sent to server of name ${data.name}`);
})

//custom middleware

//request logger
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Received a ${req.method} request for ${req.url}`);
    next();
})

app.get('/', (req, res) => {
    res.send("req recieved");
})

app.listen(port, () => {
    console.log(`server listening at port: ${port}`);
})