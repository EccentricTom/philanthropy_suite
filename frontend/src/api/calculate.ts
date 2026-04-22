import axios from 'axios';

export const fetchAllocations = async (data: any) => {
  // This matches your FastAPI endpoint
  const response = await axios.post('/api/calculate', data);
  return response.data;
};