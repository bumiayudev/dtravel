'use client'
 
import Container from '@/component/container'
import Search from '@/component/search'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Bluebird from '../../../public/assets/burung hantu.png'
 
export function NavLinks() {
  const pathname = usePathname()
 
  return (
    <nav className='h-[58px] bg-slate-100 shadow-lg p-4'>
      <Container>
        <div className='flex justify-between items-center'>
          <div className="flex">
            <Image src={Bluebird} className='pb-0.5'
            alt='Logo dtravel'
            placeholder='blur'
            height={48}
            width={48}
            />
            <Search />
          </div>
          
        </div>
      </Container>
    </nav>
  )
}