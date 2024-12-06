import { api_instance } from "../components/Frontend/Header/HeaderApi`s";

export const getCollageService = async () => {
  const { data } = await api_instance.get("/api/collage");
  return data;
};

export const getCollageByIdService = async (id) => {
  const { data } = await api_instance.get(`/api/collage/${id}`);
  return data;
};

export const getCollageDetailService = async (id) => {
  const { data } = await api_instance.get(`/api/collage/details/${id}`);
  return data;
};

export const getCourseService = async (id) => {
  const { data } = await api_instance.get(`/api/collage/course/${id}`);
  return data;
};
