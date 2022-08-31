const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log(res);
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
