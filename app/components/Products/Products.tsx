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
                        data-aos-delay={`${data.delay}`}
                        data-aos-duration='700'
                        key={data.id}
                        className="
                            flex flex-row
                            items-center
                            bg-gray-900 dark:bg-gray-900
                            rounded-xl shadow-md
                            overflow-hidden
                            p-4
                            gap-4
                            min-h-[140px]
                        "
                    >
                        {/* Card Image */}
                        <div className="flex-shrink-0">
                            <Image
                                width={100}
                                height={100}
                                src={data.image}
                                alt={data.title}
                                className="object-cover w-[100px] h-[100px] rounded-lg"
                            />
                        </div>
                        {/* Card Content */}
                        <div className="flex flex-col justify-between flex-1 h-full">
                            <h2 className="text-lg font-semibold text-white mb-1">
                                {data.title}
                            </h2>
                            <p className="text-sm text-gray-300 mb-2">
                                {/* Example description, replace with real data */}
                                Delicious and fresh, made with premium ingredients.
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-md font-bold text-primary-light">
                                    {data.price} L.E
                                </span>
                                {/* Add To Cart Button */}
                                {/* <Button
                                    textColor="text-white"
                                    bgColor="bg-primary"
                                    text="Add To Cart"
                                    handler={clickBtn}
                                /> */}
                            </div>
                        </div>
                    </div>
                ))}

            </div>



        </div>
    )
}

export default Products