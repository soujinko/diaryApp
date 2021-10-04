import axios from 'axios';
import dotenv from 'dotenv';

export default axios.create({
  // baseURL: "https://canverse.org/nodeapi/website_api/",
  baseURL: new URL(process.env.REACT_APP_BACKEND_URL).href,
  headers: {
    'Content-type': 'application/json',
  },
});
