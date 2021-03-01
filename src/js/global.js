import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `https://covid19.dsu.so/`,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

