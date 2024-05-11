'use client'
 
import { Button } from '@/component/button'
import Container from '@/component/container'
import Nav from '@/component/nav'
import Search from '@/component/search'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Bluebird from '../../../public/assets/burung hantu.png'
 
export function Header() {
  const pathname = usePathname()
 
  return (
    <div className='h-16 bg-slate-100 shadow-lg p-4'>
      <Container size='lg'>
        <div className='flex justify-between items-center'>
          <div className="flex">
            <Image src={Bluebird}
            alt='Logo dtravel'
            placeholder='blur'
            height={48}
            width={48}
            />
            <Search />
          </div>
          <div className="flex gap-5">
            <Nav />
            <Button>Masuk</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}