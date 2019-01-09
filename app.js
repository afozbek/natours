
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


//adding the route
const route = require('./routes/route');
app.use(route);

//Start the server
console.log("Listening on " + port);
app.listen(port, () => {
});