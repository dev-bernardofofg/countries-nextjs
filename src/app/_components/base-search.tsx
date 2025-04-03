'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const BaseSearch = () => {
  const [search, setSearch] = useState("")
  const router = useRouter()

  const handleSearchCountry = (country: string) => {
    if (country === '') return
    router.push(`/country/${country}`)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (search === '') return
    if (event.key === "Enter") {
      handleSearchCountry(search)
    }
  }

  return (
    <div className='w-full flex gap-3'>
      <Input
        placeholder='Enter country name'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        className='bg-white text-black border border-border hover:opacity-70 hover:bg-white'
        onClick={() => handleSearchCountry(search)}
      >
        Search
      </Button>
    </div>
  )
}
