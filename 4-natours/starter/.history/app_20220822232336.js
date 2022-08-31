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
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: { tours },
  });
  const tour = tours.find(
    (tour) => tour.id === req.params.id
  );

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
  console.log(req.body);
  res.end('Done');
});

// app.get('/', (req, res) => {
//   res.status(200).json({
//     message: 'Hello from the server side!',
//     app: 'Natours',
//   });
// });

// app.post('/', (req, res) => {
//   res.send('You can post to this endpoint...!');
// });

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
