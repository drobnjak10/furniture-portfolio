import Cookies from "universal-cookie";

const cookies = new Cookies();
const token = cookies.get("access_token");

export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}${endpoint}`
    );

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

export const postHandler = async (endpoint, formData) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}${endpoint}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

export const authCalls = async (endpoint, method = 'GET', body = null) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}${endpoint}`,
      {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: body
      }
    );
    
    const data = await response.json();
    if(data.logout) {
      cookies.remove('access_token')
    }
    
    return data;
  } catch (error) {
    cookies.remove('access_token')
    return error;
  }
};

export const getTokenApi = async (token) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/user/auth`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    if(data.logout) {
      cookies.remove('access_token')
    }
    
    return data;
  } catch (error) {
    cookies.remove('access_token')
    return error;
  }
};