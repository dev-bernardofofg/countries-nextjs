import { fetchCountrys } from "./_actions/fetch-countrys";
import { BaseCard } from "./_components/base-card";
import { BaseSearch } from "./_components/base-search";

export default async function Home() {
  const countrys = await fetchCountrys();
  return (
    <section className="base:py-4 md:py-8 max-w-7xl mx-auto h-full base:px-3 xl:px-0 space-y-4">
      <BaseSearch />

      <div className="grid base:grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 base:gap-3 md:gap-5">
        {countrys.map((country) => (
          <BaseCard
            key={country.name.common}
            country_flag={country.flags.svg}
            title={country.name.common}
          />
        ))}
      </div>
    </section>
  );
}
