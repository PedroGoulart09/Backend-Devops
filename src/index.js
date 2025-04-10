const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/data', (req, res) => {
  res.json({ data: 'some secured data' });
});

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
});
