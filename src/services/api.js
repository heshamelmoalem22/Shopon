import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

export async function getProducts() {
  const res = await axios.get(BASE_URL);
  return res.data;
}

export async function getProduct(id) {
  const res = await axios.get(`${BASE_URL}/${id}`);
  return res.data;
}
