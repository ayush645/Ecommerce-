import axios from "axios";

export const getUserById = async (uId) => {
  try {
    let res = await axios.post(`/api/user/signle-user`, { uId });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePersonalInformationFetch = async (userData) => {
  try {
    let res = await axios.post(`/api/user/edit-user`, userData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getOrderByUser = async (uId) => {
  try {
    let res = await axios.post(`/api/order/order-by-user`, { uId });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePassword = async (formData) => {
  try {
    let res = await axios.post(`/api/user/change-password`, formData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
