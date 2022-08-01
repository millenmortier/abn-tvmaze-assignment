import axios from 'axios';

export default axios.create({
  baseURL: import.meta.env.VITE_ABN_TVMAZE_PROXY_BASE_URL,
});
