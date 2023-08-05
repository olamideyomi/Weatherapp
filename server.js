const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());

app.get('/weather', async (req, res) => {
  const query = req.query.q;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&APPID=${process.env.API_KEY}`);
  const data = await response.json();
  res.json(data);
});

app.listen(3000, () => console.log('Server running on port 3000'));
