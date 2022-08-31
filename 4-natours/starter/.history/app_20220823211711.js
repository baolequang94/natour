const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRouter');

const app = express();

// 1. MIDDLEWARE

app.use(morgan('dev'));
app.use(express.json());
app.use((req, _, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//2. ROUTES
app.use('/api/v1/tours', tourRouter);

//3. START SERVER
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
