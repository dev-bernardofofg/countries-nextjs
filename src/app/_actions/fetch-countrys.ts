import { EXPIRED_IN_ONE_HOUR } from "../_utils/cache";

type fetchCountrysResponse = {
  name: {
    common: string;
    official: string;
  };
};

export async function fetchCountrys(): Promise<fetchCountrysResponse[]> {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all", {
      next: { revalidate: EXPIRED_IN_ONE_HOUR },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await response.json();
    return posts;
  } catch (error: any) {
    throw new Error(error.message || "An unexpected error occurred");
  }
}
