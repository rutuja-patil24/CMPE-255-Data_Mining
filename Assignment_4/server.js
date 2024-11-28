require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3001;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

app.get('/weather', async (req, res) => {
  const cityName = req.query.city;
  if (!cityName) {
    return res.status(400).send('City query parameter is required');
  }

  const apiKey = process.env.WEATHER_API_KEY;
  if (!apiKey) {
    console.error('API key is missing in environment variables');
    return res.status(500).send('Internal server error');
  }

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error('Error retrieving weather data:', error.message); // Add more detailed error log

    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);

      return res.status(error.response.status).send(error.response.data.message || 'Error retrieving weather data');
    } else if (error.request) {
      console.error('No response received:', error.request);
      return res.status(503).send('No response received from the OpenWeatherMap API');
    } else {
      console.error('Request setup error:', error.message);
      return res.status(500).send('Error setting up request');
    }
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
