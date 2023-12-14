import api from "@/plugins/axios";

function getProducts() {
  return api.get("/products");
}

function getProduct(id) {
  return api.get(`/products/${id}`);
}

export { getProducts, getProduct };
