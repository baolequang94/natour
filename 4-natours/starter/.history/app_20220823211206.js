const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const app = express();

// 1. MIDDLEWARE

app.use(morgan('dev'));
app.use(express.json());
app.use((req, _, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//2. ROUTE HANDLERS

// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

//3. ROUTES
app.use('/api/v1/tours', tourRouter);

//4. START SERVER
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
