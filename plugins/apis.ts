import axios from "axios";

const createAPI = (baseURL: string) => {
  const instance = axios.create({
    baseURL: baseURL, //Ex: "https://some-domain.com/api/",
    timeout: 1000,
  });

  // Add access token to header
  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    config.headers.Authorization = token;
    return config;
  });
  return instance;
};

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig();
  const api: any = createAPI(runtimeConfig.API_BASE_URL);

  return {
    provide: { api },
  };
});
