import { EXPIRED_IN_ONE_HOUR } from "../_utils/cache";

type fetchCountrysResponse = {
  name: {
    common: string;
    official: string;
  };
  flags: {
    svg: string;
  };
};

export async function fetchCountrys(): Promise<fetchCountrysResponse[]> {
  const response = await fetch("https://restcountries.com/v3.1/all", {
    next: { revalidate: EXPIRED_IN_ONE_HOUR },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch countrys");
  }

  const countrys = await response.json();
  return countrys;
}
