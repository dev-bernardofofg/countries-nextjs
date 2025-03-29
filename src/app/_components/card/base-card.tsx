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
      href={title.toLowerCase()}
      className="p-2 flex flex-col gap-3 bg-white rounded-2xl shadow hover:opacity-70 transition-all"
    >
      <Image
        src={country_flag}
        alt={`country-${title.toLowerCase()}`}
        width={256}
        height={128}
        className="max-h-32 min-h-32 object-cover rounded-2xl shadow"
      />

      <div className="w-full text-center truncate">
        <span className="text-black font-bold">{title}</span>
      </div>
    </Link>
  );
};
