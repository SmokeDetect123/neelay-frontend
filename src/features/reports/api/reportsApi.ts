import axiosInstance from "@/lib/axios";

export const reportsApi = {
  getAllReports: async () => {
    const response = await axiosInstance.get(
      "/reports"
    );

    return response.data;
  },
};