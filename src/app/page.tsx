import { fetchCountrys } from "./_actions/fetch-countrys";

export default async function Home() {
  const countrys = await fetchCountrys();
  return (
    <section className="mt-16 max-w-7xl mx-auto overflow-auto h-full">
      <ul className="grid grid-cols-5 gap-4">
        {countrys.map((country) => (
          <li key={country.name.common}>{country.name.common}</li>
        ))}
      </ul>
    </section>
  );
}
