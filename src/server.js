const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('dist'));
/* eslint no-console: "off" */
app.listen(port, () => console.log(`App is running on port ${port}!`));
