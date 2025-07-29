const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.use(require('./api/content-feed'));
app.use(require('./api/verify-event-ticket'));

app.get('/', (req, res) => {
  res.send('PowerOfAum Events API running');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
