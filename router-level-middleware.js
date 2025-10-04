// create an Express application that uses a router for /data routes, implements
// router-level middleware to log the HTTP method and request URL for every
// incoming request, and includes a route /data/info that responds with This is some
// information."

const express = require('express');
const app = express();
const port = 3000;
const dataRouter = require('./routes/data');

app.get('/', (req, res) => {
    res.send('Welcome to the main application! The router middleware will not run for this route.');
});

app.use('/data', dataRouter);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

