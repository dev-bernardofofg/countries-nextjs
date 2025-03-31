import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BaseCardProps {
  title: string;
  country_flag: string;
}

export const BaseCard = ({ title, country_flag }: BaseCardProps) => {
  return (
    <Link
      href={`/country/${title.toLowerCase()}`}
      className="p-2 flex flex-col gap-3 bg-white rounded-2xl shadow hover:opacity-70 transition-all"
    >
      <div className="relative base:max-h-40 xl:max-h-32 base:min-h-40 xl:min-h-32 w-full">
        <Image
          src={country_flag}
          alt={`country-${title.toLowerCase()}`}
          fill
          className="object-cover rounded-2xl shadow"
        />
      </div>

      <div className="w-full text-center truncate">
        <span className="text-black font-bold">{title}</span>
      </div>
    </Link>
  );
};
