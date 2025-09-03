import React from 'react'
import Button from '../Shared/Button'
import Image from 'next/image'

const CategoryData = [
    {
        id: 1,
        subtitles: "Fresh & Tasty",
        title: 'Sushi',
        title2: 'Sushi',
        image: "./assets/sushi/—Pngtree—high-resolution image of authentic japanese_20616796.png",
        imageWidth: "w-[320px]",
        ImageWidth: 320,
        bgColorFrom: "from-red-900",
        bgColorTo: "to-red-800",
        cols: "",
        btnbgColor: "bg-red-700",
        btnTextColor: "text-white",
        imgPosition: "top-0"
    },
    {
        id: 2,
        subtitles: "Warm & Savory",
        title: 'Noodles',
        title2: 'Noodles',
        image: '/assets/sushi/vecteezy_shrimp-noodles-with-garnish-in-a-bowl_51015227.png',
        imageWidth: "w-[320px]",
        ImageWidth: 320,
        bgColorFrom: "from-yellow-900",
        bgColorTo: "to-yellow-800",
        cols: "",
        btnbgColor: "bg-yellow-700",
        btnTextColor: "text-white",
        imgPosition: "top-0"
    },
    {
        id: 3,
        subtitles: "Healthy Choice",
        title: 'Salad',
        title2: 'Salad',
        image: '/assets/sushi/vecteezy_fresh-mixed-salad-with-vibrant-vegetables-and-greens-in-bowl_55928814.png',
        imageWidth: "w-[350px]",
        ImageWidth: 350,
        bgColorFrom: "from-green-900",
        bgColorTo: "to-green-800",
        cols: "col-span-2",
        btnbgColor: "bg-green-700",
        btnTextColor: "text-white",
        imgPosition: "top-0"
    },
    {
        id: 4,
        subtitles: "Crispy & Fresh",
        title: 'Spring Rolls',
        title2: 'Spring',
        image: "/assets/sushi/vecteezy_spring-roll-with_25269728.png",
        imageWidth: "w-[320px]",
        ImageWidth: 320,
        bgColorFrom: "from-orange-900",
        bgColorTo: "to-orange-800",
        cols: "col-span-2",
        btnbgColor: "bg-orange-700",
        btnTextColor: "text-white",
        imgPosition: "top-12"
    },
    {
        id: 5,
        subtitles: "Seafood Special",
        title: 'Crab Salad',
        title2: 'Crab',
        image: '/assets/sushi/vecteezy_bowl-of-tasty-russian-salad-isolated-on-transparent-background_27144840.png',
        imageWidth: "w-[310px]",
        ImageWidth: 310,
        bgColorFrom: "from-blue-900",
        bgColorTo: "to-blue-800",
        cols: "",
        btnbgColor: "bg-blue-700",
        btnTextColor: "text-white",
        imgPosition: "top-0"
    },
    {
        id: 6,
        subtitles: "Sweet Treats",
        title: 'Desserts',
        title2: 'Dessert',
        image: '/assets/sushi/vecteezy_chocolate-lava-cake-with_25064819.png',
        imageWidth: "w-[300px]",
        ImageWidth: 300,
        bgColorFrom: "from-purple-900",
        bgColorTo: "to-purple-800",
        cols: "",
        btnbgColor: "bg-purple-700",
        btnTextColor: "text-white",
        imgPosition: "bottom-0 right-0"
    }
]
const Category = () => {
    function clickBtn() {
        console.log('clicked')
    }
    return (


        <div className='grid grid-cols-2 lg:grid-cols-4 container gap-5'>
            {CategoryData.map((data) => (
                <div className={`
                    w-full bg-gradient-to-r 
                    ${data.cols}
                    ${data.bgColorFrom}
                    ${data.bgColorTo}
                        rounded-3xl  
                        relative
                        flex
                        overflow-hidden

                        `} key={data.id}>
                    <div className='
                    w-full grid grid-cols-1 
                            sm:grid-cols-2  min-h-[320px]
                            justify-center items-center
                            pd-2 sm:pd-0
                            '>
                        {/* text section */}
                        <div className='flex flex-col pl-2
                                gap-3 sm:pl-5 pt-2 sm:pt-0 
                                text-left order-2 
                                sm:order-1 relative z-10
                                '>
                            <h1 className=' text-white
                                    text-lg 
                                    '>{data.subtitles}</h1>
                            <h1 className='font-bold text-white
                                    text-xl sm:text-2xl lg:text-3xl'
                            >{data.title}</h1>
                            <h1 className='font-bold uppercase
                                    text-4xl text-white/20 
                                    sm-text-3xl
                                    md:text-2xl 
                                    xl:text-5xl
                                     z-10'>{data.title2}</h1>
                            <div><Button
                                textColor={`${data.btnTextColor}`}
                                bgColor={`${data.btnbgColor}`}
                                text='Browse'
                                handler={clickBtn} />
                            </div>

                        </div>

                        {/* img section */}
                        <div className='order-1  
                                '><Image width={data.ImageWidth} height={400} src={data.image} alt=""
                                className={`
                                   ${data.imgPosition}
                                   right-0
                                   
                                drop-shadow-md
                                absolute `} /></div>
                    </div>
                </div>
            ))}
        </div>


    )
}

export default Category