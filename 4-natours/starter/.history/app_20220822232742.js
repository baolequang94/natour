const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(
    `${__dirname}/dev-data/data/tours-simple.json`
  )
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: { tours },
  });
});

app.get('/api/v1/tours/:id', (req, res) => {
  const id = req.params.id * 1;

  const tour = tours.find((tour) => tour.id === id);

  if (!tour) {
    return res.status(404).json({
      status: 'failed',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
});

app.post('/api/v1/tours', (req, res) => {
  const id = tours.length;
  console.log(tours.length);
  res.end('Done');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
