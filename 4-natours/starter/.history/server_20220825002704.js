const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');
if (process.env.NODE_ENV === 'development') {
  app.use('');
}

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
