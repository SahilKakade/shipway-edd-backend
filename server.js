require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

const email = process.env.SHIPWAY_EMAIL;
const license = process.env.SHIPWAY_LICENSE_KEY;

const token = Buffer.from(`${email}:${license}`).toString('base64');

app.get('/get-edd', async (req, res) => {
  const { from, to } = req.query;

  try {
    const response = await axios.get('https://app.shipway.com/api/PredictedEdd', {
      headers: {
        Authorization: `Basic ${token}`
      },
      params: {
        pickup_pincode: from,
        destination_pincode: to
      }
    });

    const eddData = Object.values(response.data.response || {})[0];
    res.json({
      edd_date: eddData?.edd_date || 'Unavailable',
      courier: eddData?.courier || '',
      mode: eddData?.mode || ''
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to fetch EDD' });
  }
});

app.get('/', (req, res) => res.send("Shipway EDD API is live"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
