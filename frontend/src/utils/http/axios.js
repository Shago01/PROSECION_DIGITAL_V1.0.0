import axios from 'axios';

const axiosInstance = axios.create();

const axiosGetRequest = async (url, config) => {
  try {
    const response = (await axiosInstance.get(url, config)).data;
    return [null, response];
  } catch (error) {
    const { data } = error.response;
    return [data.err, null];
  }
};

const axiosPostRequest = async (url, data, config = {}) => {
  try {
    const response = (await axiosInstance.post(url, data, config)).data;
    console.log(response);

    return [null, response];
  } catch (error) {
    const { data } = error.response;
    return [data.err, null];
  }
};

const axiosPutRequest = async (url, data, config) => {
  try {
    const response = (await axiosInstance.put(url, data, config)).data;
    return [null, response];
  } catch (error) {
    const { data } = error.response;
    return [data.err, null];
  }
};

const axiosDeleteRequest = async (url, config) => {
  try {
    const response = (await axiosInstance.delete(url, config)).data;
    return [null, response];
  } catch (error) {
    const { data } = error.response;

    return [data.err, null];
  }
};

export {
  axiosGetRequest,
  axiosPostRequest,
  axiosPutRequest,
  axiosDeleteRequest,
};
