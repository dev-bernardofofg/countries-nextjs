"use client";

import { LinkTypography, SpanTypography } from "@/app/_components/base-typography";
import { ArrowLeft } from "lucide-react";

export default function Error() {
  return (
    <section className="flex flex-col max-w-7xl mx-auto base:px-4 md:px-0">
      <h1 className="text-5xl text-center font-bold text-gray-800 my-16">
        Ops, ocorreu um erro ao exibir esse país!
      </h1>
      <LinkTypography href="/" className="flex items-center gap-1.5">
        <ArrowLeft className="size-4" />
        <SpanTypography text="Back" />
      </LinkTypography>
    </section>
  );
}