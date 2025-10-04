// configure Express to serve static resources (e.g., CSS, images). Create a directory
// for static files and serve them using the express.static middleware.

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const publicDirectoryPath = path.join(__dirname, 'public');
app.use(express.static(publicDirectoryPath));

app.listen(port, () => {
    console.log(`Server is up and running on http://localhost:${port}`);
});
