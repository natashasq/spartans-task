import { fetchEnhanced } from "./utils";

export const catsService = {
  getCats: async (params) => {
    const data = await fetchEnhanced({ url: "cats", params });

    return data;
  },
};
