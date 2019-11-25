
const express = require('express');
const app = express();
const port = 8080;


const bodyParser = require('body-parser');
// const port = 8080;


const profileRoutes = require('./routes/profile');
const courseRoutes = require('./routes/course');
const toolRoutes = require('./routes/tool');

app.use(bodyParser.json());

// Routes for the app
app.use('/profile', profileRoutes);
app.use('/course', courseRoutes);
app.use('/tool', toolRoutes);
 

app.listen(port, () => console.log(`Listening on port ${port}`));

