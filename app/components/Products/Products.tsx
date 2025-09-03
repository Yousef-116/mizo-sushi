import React from 'react'
import Button from '../Shared/Button'
import Image from 'next/image'


const ProductsData = [
    {
        id: 1,
        title: 'Product 1',
        image: "./assets/sushi/—Pngtree—high-resolution image of authentic japanese_20616796.png",
        price: 100,
        delay: 200
    },
    {
        id: 2,
        title: 'Product 2',
        image: "./assets/sushi/pngwing.com (2).png",
        price: 150,
        delay: 300
    },
    {
        id: 3,
        title: 'Product 3',
        image: "./assets/sushi/pngwing.com (5).png",
        price: 200,
        delay: 400
    },
    {
        id: 4,
        title: 'Product 4',
        image: "./assets/sushi/vecteezy_ai-generated-salmon-sushi-png_35675762.png",
        price: 250,
        delay: 500
    },
    {
        id: 5,
        title: 'Product 5',
        image: "./assets/sushi/vecteezy_temaki-with_26758545.png",
        price: 300,
        delay: 200
    },
    {
        id: 6,
        title: 'Product 6',
        image: "./assets/sushi/vecteezy_shrimp-noodles-with-garnish-in-a-bowl_51015227.png",
        price: 350,
        delay: 300
    },
    {
        id: 7,
        title: 'Product 7',
        image: "./assets/sushi/vecteezy_a-bowl-of-noodles-with-chicken-and-peppers_69375942.png",
        price: 400,
        delay: 400
    },
    {
        id: 8,
        title: 'Product 8',
        image: "./assets/sushi/vecteezy_fudgy-chocolate-cupcake-with-fluffy-peanut-butter-topping_57672967.png",
        price: 500,
        delay: 500
    }
    ,
    {
        id: 9,
        title: 'Product 8',
        image: "./assets/sushi/vecteezy_appetizing-peruvian-ceviche-with-fish-lime-and-herbs_52242036.png",
        price: 500,
        delay: 500
    }
    ,
    {
        id: 10,
        title: 'Product 8',
        image: "./assets/sushi/vecteezy_chocolate-lava-cake-with_25064819.png",
        price: 500,
        delay: 500
    }
]


const Products = () => {


    function clickBtn() {
        console.log('clicked')
    }

    return (
        <div className='container pb-20'>
            <div className='container text-center w-full pt-24 pb-10'>
                <h1 className=' font-bold text-3xl dark:text-white'>Our Products</h1>
                <p className='text-sm text-gray-400 '>Explore Our Products</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-5'>
                {ProductsData.map((data) => (
                    <div
                        data-aos="fade-up"
                        data-aos-delay={`${data.price}`}
                        data-aos-duration='700'
                        key={data.id} className='
                        flex flex-col 
                        items-center 
                        overflow-hidden
                        '>
                        {/* Card Image */}
                        <div className='relative group'>
                            <Image width={200} height={200} src={data.image} alt={data.title}
                                className='object-cover w-full h-[200px] rounded-xl 
                                group-hover:blur-sm transition-all duration-1000' />
                            {/* Card Button */}
                            <div className='absolute inset-0 flex 
                            items-center justify-center

                            transform -translate-y-28
                            group-hover:translate-y-0 

                            opacity-0 group-hover:opacity-100 
                            transition-all duration-1000

                            '>
                                <Button
                                    textColor='text-white'
                                    bgColor='bg-primary'
                                    text='Add To Cart'
                                    handler={clickBtn}
                                />
                            </div>
                        </div>
                        <div className=''>
                            <h2 className='text-md font-semibold text-white'>
                                {data.title}</h2>
                            <p className='text-md font-bold text-white text-center'>
                                {data.price} L.E
                            </p>
                        </div>
                    </div>
                ))}

            </div>



        </div>
    )
}

export default Products