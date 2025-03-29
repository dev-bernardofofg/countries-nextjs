import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface BaseCardProps {
  title: string;
  country_flag: string;
}

const BaseCard = ({ title, country_flag }: BaseCardProps) => {
  return (
    <Link href={title.toLowerCase()} className='p-2 flex flex-col gap-3'>
      <div className=''>
        <Image src={country_flag} alt={`country-${title.toLowerCase()}`} width={218} height={43} />
      </div>

      <div className='flex items-center justify-center'>
        <span className='text-black font-bold'>{title}</span>
      </div>
    </Link>
  )
}

export default BaseCard
