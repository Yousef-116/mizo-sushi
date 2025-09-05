"use client";
import React, { useEffect, useState } from 'react';

import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Services from "./components/Services/Services";
//import Banner from "./components/Banner/Banner";
import Products from "./components/Products/Products";
//import Blogs from "./components/Blogs/Blogs";
//import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
//import Popup from "./components/Popup/Popup";
import AOS from 'aos';
import "aos/dist/aos.css";
import Navebar from './components/Navebar/Navebar';

// const BannerData = [
//   {
//     fromBgColor: "bg-primary",
//     toBgColor: "bg-primary/90",
//     discount: "30% OFF",
//     title: "Sushi Box 30 Pieces",
//     date: "10 Jan to 28 Jan",
//     image: "./assets/sushi/pngwing.com (3).png",
//     alt: "Sushi Box Banner",
//     btntextColor: "text-primary",
//   },
//   {
//     fromBgColor: "bg-brandGreen",
//     toBgColor: "bg-brandGreen/90",
//     discount: "25% OFF",
//     title: "Noodles with Spring Rolls",
//     date: "15 Jan to 31 Jan",
//     image: "./assets/sushi/vecteezy_ai-generated-stir-fried-noodles-with-vibrant-vegetables-on-a_36497912.png",
//     alt: "Noodles with Spring Rolls Banner",
//     btntextColor: "text-brandGreen",
//   }
// ];

export default function Home() {
  //const [isPopupVisible, setIsPopupVisible] = useState(false);

  // const togglePopup = () => {
  //   setIsPopupVisible(!isPopupVisible);
  // };

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-sine',
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-[#010101] dark:bg-gray-900 w-full relative">
      <Navebar />
      <Hero />
      <Category />
      <Services />
      {/* <Banner propdata={BannerData[0]} /> */}
      <Products />
      {/* <Banner propdata={BannerData[1]} /> */}
      {/* <Blogs />  */}
      {/* <Partners />  */}
      <Footer />
      {/* <Popup
        isVisible={isPopupVisible}
        onClose={togglePopup}
      />  */}
    </div>
  );
}
