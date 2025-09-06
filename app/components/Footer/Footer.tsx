import React from 'react'
//import Button from '../Shared/Button'
import { IoIosSend } from "react-icons/io";
import { CiMobile1 } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from 'react-icons/fa6';


const Footer = () => {
    // function clickBtn() {
    //     console.log('clicked')
    // }
    return (
        <div className='container pb-36 mt-20'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10' >
                {/* col 1 */}
                <div className='col-span-2 sm:col-span-3 md:col-span-2 grid gap-4 text-gray-600'>
                    <div>
                        <a href="#" className='text-primary font-semibold 
                        tracking-widest 
                        text-2xl uppercase md:text-3xl pr-7'>Mizo Sushi</a>
                    </div>
                    <p className='text-white'>
                        Experience the authentic taste of Japan with our fresh, handcrafted sushi and warm, family-friendly atmosphere—perfect for sharing delicious moments together.
                    </p>
                    <p className='text-white' >
                        Made with 💖 by The Yousef Mostafa
                    </p>
                    {/* <Button
                        textColor='text-white'
                        bgColor='bg-primary'
                        text='Visit our YouTubee Channel'
                        handler={clickBtn}
                    /> */}
                </div>
                {/* col 2 */}
                <div className='flex flex-col gap-3 text-white'>
                    <h3 className='font-extrabold text-lg'>
                        Important Links</h3>
                    <p className='text-gray-500 transition-all
                    duration-200 hover:text-white
                    hover:text-black'>Home</p>
                    <p className='text-gray-500 transition-all
                    duration-200 hover:text-white
                    hover:text-black'>About</p>
                    <p className='text-gray-500 transition-all
                    duration-200   hover:text-black hover:text-white'>Contact</p>
                    {/* <p className='text-gray-500 transition-all
                    duration-200   hover:text-black hover:text-white'>Blog</p> */}
                </div>

                {/* col 3 */}
                {/* <div className='flex flex-col gap-3 '>
                    <h3 className='font-extrabold text-lg text-white'>
                        Quick Links</h3>
                    <p className='text-gray-500 transition-all
                    duration-200  hover:text-white
                    hover:text-black'>Home</p>
                    <p className='text-gray-500 transition-all
                    duration-200 hover:text-white
                    hover:text-black'>About</p>
                    <p className='text-gray-500 transition-all
                    duration-200   hover:text-black hover:text-white'>Contact</p>
                    <p className='text-gray-500 transition-all
                    duration-200   hover:text-black
                    hover:text-white'>Blog</p>
                </div> */}

                {/* col 4 */}
                <div className='flex flex-col sm:col-span-1 col-span-2  gap-3'>
                    <h3 className='font-extrabold text-lg text-white'>
                        Address</h3>
                    <div className='flex items-center w-full gap-2 text-white'>
                        <IoIosSend className='w-1/3 max-h-4 max-w-4 ' />
                        <p>Egypt , Ashraf Hafez-Hadayek elMaadi</p>
                    </div>

                    <div className='flex items-center w-full gap-2 text-white'>
                        <CiMobile1 className='w-1/3 max-h-4 max-w-4 ' />
                        <p>+2 01105092045</p>
                    </div>

                    <div className='flex gap-4'>
                        <a
                            href="https://www.instagram.com/mizo.sushi?igsh=MWhtenp6M3FxY3lsYw=="
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram className='w-7 h-7 text-white hover:text-primary duration-500 transition-all' />
                        </a>
                        <a
                            href="https://www.facebook.com/share/17PDRxYzau/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebook className='w-7 h-7 text-white hover:text-brandBlue duration-500 transition-all' />
                        </a>
                        <a
                            href="https://wa.me/+201105092045"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp className='w-7 h-7 text-white hover:text-brandGreen duration-500 transition-all' />
                        </a>
                    
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer