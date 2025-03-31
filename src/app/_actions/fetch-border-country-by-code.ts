import { EXPIRED_IN_ONE_HOUR } from "../_utils/cache";

export type fetchBorderCountryByCodeResponse = {
  name: {
    common: string;
    official: string;
  };
  flags: {
    svg: string;
  };
};

export async function fetchBorderCountryByCode(
  code: string
): Promise<fetchBorderCountryByCodeResponse> {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`, {
    next: { revalidate: EXPIRED_IN_ONE_HOUR },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch border country");
  }
  const borderCountrys = await response.json();

  return borderCountrys;
}
