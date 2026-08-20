// Load the environment variables from the .env file
require('dotenv').config();

const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;
const GOOGLE_CLOUD_API_KEY = process.env.GOOGLE_CLOUD_API_KEY;

const PAGESPEED_URL = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed"

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

// POST method route
app.post('/', async (req, res) => {
  const targetUrl = req.body.url;
  const category = req.body.category;
  const response = await axios.get(`${PAGESPEED_URL}?url=${targetUrl}&category=${category}&key=${GOOGLE_CLOUD_API_KEY}`);

  // res.json(response.data["lighthouseResult"]["categories"]);
  const lighthouseJsonCategories = {
    "ACCESSIBILITY": "accessibility",
    "BEST_PRACTICES": "best-practices",
    "PERFORMANCE": "performance",
    "SEO": "seo",
  }

  const data = response.data["lighthouseResult"]["categories"][lighthouseJsonCategories[category]];

  res.json(data);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
