import { fetchCountrys } from "./_actions/fetch-countrys";
import { BaseCard } from "./_components/base-card";

export default async function Home() {
  const countrys = await fetchCountrys();
  return (
    <section className="py-16 max-w-7xl mx-auto h-full">
      <div className="grid grid-cols-5 gap-5">
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
