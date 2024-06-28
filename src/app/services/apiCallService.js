import axiosInstance from '../axios/axios';

const headers = {
  Authorization: localStorage.getItem('accessToken') || ''
};

// API call response checker and error handlers
 const checkResponse = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return { data: response.data, success: true };
    } else return { success: false, error: response.message };
  };

// API call function for GET requests
export async function callGetApi(endpoint) {
  try {
    const response = await axiosInstance.get(endpoint, { headers });

    return checkResponse(response);
  } catch (error) {
    return { success: false, error: error };
  }
}

// API call function for POST requests
export async function callPostApi(endpoint, data = {}) {
  try {
    const response = await axiosInstance.post(endpoint, data, { headers });

    return checkResponse(response);
  } catch (error) {
    return { success: false, error: error };
  }
}

// API call function for PUT requests
export async function callPutApi(endpoint, data = {}) {
  try {
    const response = await axiosInstance.put(endpoint, data, { headers });

    return checkResponse(response);
  } catch (error) {
    return { success: false, error: error };
  }
}

// API call function for DELETE requests
export async function callDeleteApi(endpoint) {
  try {
    const response = await axiosInstance.delete(endpoint, { headers });

    return checkResponse(response);
  } catch (error) {
    return { success: false, error: error };
  }
}
