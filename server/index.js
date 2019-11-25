const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8080;

const profileRoutes = require('./routes/profile');
const moduleRoutes = require('./routes/module');
const toolRoutes = require('./routes/tool');

app.use(bodyParser.json());

// Routes for the app
app.use('/profile', profileRoutes);
app.use('/module', moduleRoutes);
app.use('/tool', toolRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`));