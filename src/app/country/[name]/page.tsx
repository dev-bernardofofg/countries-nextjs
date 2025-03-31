import {
  fetchBorderCountryByCode,
  fetchBorderCountryByCodeResponse,
} from "@/app/_actions/fetch-border-country-by-code";
import { fetchCountryByName } from "@/app/_actions/fetch-country-by-name";
import { BaseCard } from "@/app/_components/base-card";
import { BaseList } from "@/app/_components/base-list";
import {
  LinkTypography,
  SpanTypography,
  TitleTypography,
} from "@/app/_components/base-typography";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const country = await fetchCountryByName(name);

  let borderCountries: fetchBorderCountryByCodeResponse[] = [];
  if (country.borders) {
    borderCountries = (
      await Promise.all(
        country.borders.map((borderCode: string) =>
          fetchBorderCountryByCode(borderCode)
        )
      )
    ).flat();
  }

  return (
    <div className="h-full flex flex-col py-16 max-w-7xl mx-auto space-y-3">
      <div className="flex items-center justify-center">
        <TitleTypography text={country.name.common} />
      </div>
      <div>
        <LinkTypography href="/" className="flex items-center gap-1.5">
          <ArrowLeft className="size-4" />
          <SpanTypography text="Back" />
        </LinkTypography>
      </div>

      <div className="grid grid-cols-2 bg-white rounded-3xl shadow px-16 py-8">
        <div className="flex flex-col gap-1">
          <BaseList title="Capital" value={country.capital} />
          <BaseList title="Continent" value={country.continents} />
          <BaseList title="Population" value={String(country.population)} />
          <BaseList
            title="Spoken languages"
            value={country.languages}
            variant="badge"
          />
        </div>
        <div className="flex justify-end w-full">
          <Image
            src={country.flags.svg}
            alt={country.flags.alt ?? "flag-country"}
            width={458}
            height={275}
            className="rounded-3xl shadow max-h-64 object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <TitleTypography className="text-3xl" text="Bordering countries" />
        {borderCountries.length > 0 ? (
          <div className="grid grid-cols-5 gap-3">
            {borderCountries.map((border) => (
              <BaseCard
                key={border.name.common}
                title={border.name.common}
                country_flag={border.flags.svg}
              />
            ))}
          </div>
        ) : (
          <SpanTypography text="Not found borders" />
        )}
      </div>
    </div>
  );
}
