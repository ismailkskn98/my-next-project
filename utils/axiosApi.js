import axios from "axios";

// API URL'ini merkezi bir yerde tanımlayalım
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// Global Axios yapılandırması
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// API isteklerini middleware ile ve middleware'siz yönetmek için yardımcı fonksiyonlar

// Middleware ile API istekleri
const axiosWithAuth = () => {
  // LocalStorage'dan token al
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const instance = axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  });

  return instance;
};

// GET isteği (middleware'siz)
const get = async (url, params = {}) => {
  try {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("GET request error:", error);
    throw error;
  }
};

// POST isteği
const post = async (url, data) => {
  try {
    const response = await axiosWithAuth().post(url, data);
    return response.data;
  } catch (error) {
    console.error("POST request error:", error);
    throw error;
  }
};

// PUT isteği
const put = async (url, data) => {
  try {
    const response = await axiosWithAuth().put(url, data);
    return response.data;
  } catch (error) {
    console.error("PUT request error:", error);
    throw error;
  }
};

// DELETE isteği
const remove = async (url) => {
  try {
    const response = await axiosWithAuth().delete(url);
    return response.data;
  } catch (error) {
    console.error("DELETE request error:", error);
    throw error;
  }
};

export { get, post, put, remove };
