'use client'

import { useQuery } from "@tanstack/react-query";
import BaseCard from "./_components/base-card";
import { fetchGetAllCountrys } from "./_services/get-all-countrys";

export default function Home() {
	const { data } = useQuery({
		queryKey: ['countrys'],
		queryFn: () => fetchGetAllCountrys()
	})
	return (
		<section className="max-w-7xl mx-auto w-full pt-24">
			<div className="grid grid-cols-4 gap-8">
				{data?.map((country) => (
					<BaseCard country_flag={country.flags.svg} title={country.name.common} key={country.name.common} />
				))}
			</div>
		</section>
	);
}
