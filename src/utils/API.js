// unsplashApi.js

import axios from "axios";

//HERE IS BASE URL
const BASE_URL = "https://api.unsplash.com";
//API KEY FOR USE IMAGE API
const API_KEY = "qlzHrY1HUVEmZRtZlbL6IU7nUSb9H7Iwj0k0GOv_AEE";
 // Number OF IMAGES PER PAGE
const PER_PAGE = 9;

export const getImagesData = async (query, page) => {
  try {
    const response = await axios.get(`${BASE_URL}/photos`, {
      params: {
        client_id: API_KEY,
        query: query,
        page: page, // Add page parameter
        per_page: PER_PAGE, // Limit images per page
      },
    });
    return response?.data?.map((item) => ({
      id: item.id,
      url: item.urls.regular,
      alt: item.alt_description,
      photographer: item.user.name,
      description: item.description,
    }));
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};