const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/api/content-feed', (req, res) => {
  const content = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../data/content.json'))
  );
  res.status(200).json(content);
});

module.exports = router;
