import Image from 'next/image'
import Bluebird from '../../../public/assets/burung hantu.png'
import Container from '../container'
import styles from './footer.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container size="xl">
                <div className='flex flex-row bg-white p-16'>
                    <figure>
                        <Image 
                        src={Bluebird}
                        alt='logo dtravel'
                        placeholder='blur'
                        height={48}
                        width={48}
                        />
                    </figure>
                    <div className="flex flex-3 justify-between ml-[106px]">
                        {/* <FooterInfo 
                            title='Info' 
                            content= {[
                                {
                                    label: 'Tentang kami',
                                    href: '/'
                                },
                                {
                                    label: 'Testimonial',
                                    href: '/'
                                },
                                {
                                    label: 'Kontak',
                                    href: '/'
                                },
                            ]}
                        />
                        <FooterInfo 
                            title='Perusahaan' 
                            content= {[
                                {
                                    label: 'Syarat & ketentuan',
                                    href: '/'
                                },
                                {
                                    label: 'Kebijakan privasi',
                                    href: '/'
                                },
                                {
                                    label: 'Blog',
                                    href: '/'
                                },
                                {
                                    label: 'Bantuan layanan',
                                    href: '/'
                                },
                            ]}
                        />
                        <FooterInfo 
                            title="Kontak"
                            content={[
                                'Jl. Dago No. 1A',
                                'Bandung, Jawa Barat',
                                'Indonesia',
                                '(022)8080808',
                                'contact@email.com'
                            ]}
                        /> */}
                    </div>
                </div>
            </Container>

            <div className='bg-blue-700 p-3'>
                <p className='tex-4xl text-white font-bold text-center'>
                    Copyright 2024 - DTravel. Allrights Reserved
                </p>
            </div>
        </footer>
    )
}