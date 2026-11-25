const axios = require('axios');

const api = axios.create({
  baseURL: process.env.API_URL || 'https://www.themealdb.com/api/json/v1/1',
  timeout: 10000
});

module.exports = api;
