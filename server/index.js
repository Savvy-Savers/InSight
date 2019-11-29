const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const profileRoutes = require('./routes/profile');
const courseRoutes = require('./routes/course');
const toolRoutes = require('./routes/tool');

app.use(bodyParser.json());

// Routes for the app
app.use('/profile', profileRoutes);
app.use('/course', courseRoutes);
app.use('/tool', toolRoutes);

module.exports = app;
/* the 'listing on port 8080' was moved to start.js
to account for jest tests needing to run a sever for each 
test page.
*/