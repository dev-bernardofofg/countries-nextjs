import { EXPIRED_IN_ONE_HOUR } from "../_utils/cache";

type fetchCountryByNameResponse = {
  name: {
    common: string;
    official: string;
  };
  flags: {
    svg: string;
    alt?: string;
  };
  borders?: string[];
  languages: {
    [key: string]: string;
  };
  capital: string;
  continents: string[];
  population: number;
};

export async function fetchCountryByName(
  name: string
): Promise<fetchCountryByNameResponse> {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`,
    {
      next: { revalidate: EXPIRED_IN_ONE_HOUR },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch country");
  }

  const country = await response.json();

  return country[0];
}
