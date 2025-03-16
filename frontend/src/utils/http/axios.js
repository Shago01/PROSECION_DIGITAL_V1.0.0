import axios from 'axios';

const axiosInstance = axios.create();

const axiosGetRequest = async (url, config) => {
  try {
    const response = await axiosInstance.get(url, config);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

const axiosPostRequest = async (url, data, config) => {
  try {
    const response = await axiosInstance.post(url, data, config);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

const axiosPutRequest = async (url, data, config) => {
  try {
    const response = await axiosInstance.put(url, data, config);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

const axiosDeleteRequest = async (url, config) => {
  try {
    const response = await axiosInstance.delete(url, config);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export {
  axiosGetRequest,
  axiosPostRequest,
  axiosPutRequest,
  axiosDeleteRequest,
};
