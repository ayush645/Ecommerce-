import axios from "axios";

export const getSingleProduct = async (pId) => {
  try {
    let res = await axios.post(`/api/product/single-product`, {
      pId: pId,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postAddReview = async (formData) => {
  try {
    let res = await axios.post(`/api/product/add-review`, formData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postDeleteReview = async (formData) => {
  try {
    let res = await axios.post(`/api/product/delete-review`, formData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
