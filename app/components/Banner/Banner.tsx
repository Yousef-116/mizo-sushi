"use client";
import React from 'react'
import Button from '../Shared/Button'
import Image from 'next/image'


interface BannerData {
    fromBgColor: string;
    toBgColor: string;
    discount: string;
    title: string;
    date: string;
    image: string;
    alt: string;
    btntextColor: string;
}

const Banner = ({ propdata }: { propdata: BannerData }) => {
    function clickBtn() {
        console.log('clicked')
    }

    return (
        <div className='container mx-auto'>
            <div className={`rounded-3xl bg-gradient-to-r 
                ${propdata.fromBgColor} ${propdata.toBgColor} 
                p-8 w-full grid md:grid-cols-4 
                items-center `} >
                {/* discount Section */}
                <div className='items-center text-white'>
                    <p data-aos="slide-right"
                        className='text-sm font-medium'>{propdata.discount}</p>
                    <h1 data-aos="zoom-out"
                        className='text-4xl font-bold'>{propdata.title}</h1>
                    <p data-aos="fade-up"
                        className='text-sm font-medium'>{propdata.date}</p>
                </div>
                {/* Image Section */}
                <div data-aos="zoom-out" className="col-span-2 h-full flex items-center relative">
                    <div className="w-full relative">
                        <Image
                            width={600}
                            height={400}
                            src={propdata.image}
                            className="drop-shadow-4xl w-full h-[250px] md:h-[350px] object-contain mx-auto
                                -mt-8 md:-mt-16 -mb-8 md:-mb-16"
                            alt={propdata.alt}
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                </div>
                {/* Description Section */}
                <div className='gap-4 grid'>
                    <h1 data-aos="zoom-out"
                        className='text-xl text-white font-bold'>Air Solo Bass</h1>
                    <h2 data-aos="fade-up"
                        className='text-3xl md:text-5xl text-white font-bold'>Winter Sale</h2>
                    <p data-aos="zoom-up"
                        className='text-sm text-white font-medium'>Smile experience with our Fine Smile headphones.</p>
                    <div data-aos="fade-up" data-aos-offset='0'>
                        <Button textColor={`${propdata.btntextColor}`} bgColor={`bg-white`} text='Shop Now' handler={clickBtn} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
