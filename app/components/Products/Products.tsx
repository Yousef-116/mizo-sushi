import React from 'react'
//import Button from '../Shared/Button'
import Image from 'next/image'


// const ProductsData = [
//     {
//         id: 1,
//         title: 'Product 1',
//         description: 'Experience authentic Japanese sushi made with the freshest ingredients.',
//         image: "./assets/sushi/—Pngtree—high-resolution image of authentic japanese_20616796.png",
//         price: 100,
//         delay: 200
//     },
//     {
//         id: 2,
//         title: 'Product 2',
//         description: 'Experience authentic Japanese sushi made with the freshest ingredients.',
//         image: "./assets/sushi/pngwing.com (2).png",
//         price: 150,
//         delay: 300
//     },
//     {
//         id: 3,
//         title: 'Product 3',
//         description: 'Experience authentic Japanese sushi made with the freshest ingredients.',
//         image: "./assets/sushi/pngwing.com (5).png",
//         price: 200,
//         delay: 400
//     },
//     {
//         id: 4,
//         title: 'Product 4',
//         image: "./assets/sushi/vecteezy_ai-generated-salmon-sushi-png_35675762.png",
//         price: 250,
//         delay: 500
//     },
//     {
//         id: 5,
//         title: 'Product 5',
//         image: "./assets/sushi/vecteezy_temaki-with_26758545.png",
//         price: 300,
//         delay: 200
//     },
//     {
//         id: 6,
//         title: 'Product 6',
//         image: "./assets/sushi/vecteezy_shrimp-noodles-with-garnish-in-a-bowl_51015227.png",
//         price: 350,
//         delay: 300
//     },
//     {
//         id: 7,
//         title: 'Product 7',
//         image: "./assets/sushi/vecteezy_a-bowl-of-noodles-with-chicken-and-peppers_69375942.png",
//         price: 400,
//         delay: 400
//     },
//     {
//         id: 8,
//         title: 'Product 8',
//         image: "./assets/sushi/vecteezy_fudgy-chocolate-cupcake-with-fluffy-peanut-butter-topping_57672967.png",
//         price: 500,
//         delay: 500
//     }
//     ,
//     {
//         id: 9,
//         title: 'Product 8',
//         image: "./assets/sushi/vecteezy_appetizing-peruvian-ceviche-with-fish-lime-and-herbs_52242036.png",
//         price: 500,
//         delay: 500
//     }
//     ,
//     {
//         id: 10,
//         title: 'Product 8',
//         image: "./assets/sushi/vecteezy_chocolate-lava-cake-with_25064819.png",
//         price: 500,
//         delay: 500
//     }
// ]

const MenuData =[
    {
  id: 11,
  title: 'Golden Fried Box 12 Pieces',
  description: '4 Golden, 4 Crunchy Salmon, 4 Hot Crab.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638874142030961630?width=172&amp;height=172',
  price: 350,
  delay: 100,
  category: 'Combos'
},
{
  id: 12,
  title: 'Golden Row Box 16 Pieces',
  description: '4 California, 4 Crispy, 4 Philadelphia, 4 Pink.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638912910232136172?width=172&amp;height=172',
  price: 400,
  delay: 100,
  category: 'Combos'
},
{
  id: 13,
  title: 'Golden Fried Box 16 Pieces',
  description: '4 Golden, 4 Spicy Lemon, 4 Hot Tumbura, 4 Crunchy Crab.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638912911208796435?width=172&amp;height=172',
  price: 450,
  delay: 100,
  category: 'Combos'
},
{
  id: 14,
  title: 'Golden Row Box 20 Pieces',
  description: '4 Philadelphia, 4 California, 4 Crispy, 4 Pink, 4 New Style Philadelphia.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638912910477566994?width=172&amp;height=172',
  price: 500,
  delay: 100,
  category: 'Combos'
},
{
  id: 15,
  title: 'Golden Fried Box 20 Pieces',
  description: '5 Golden, 5 Spider, 5 Spicy Lemon, 5 Crunchy Crab.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638912910908637909?width=172&amp;height=172',
  price: 550,
  delay: 100,
  category: 'Combos'
},
{
  id: 16,
  title: 'Golden Mix Box 32 Pieces',
  description: '6 Hot Lemon, 6 Halloween, 4 Hot Crunchy, 4 California, 4 Spider, 4 Shily C, 4 New Style Philadelphia.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638912916195694639?width=172&amp;height=172',
  price: 600,
  delay: 100,
  category: 'Combos'
},
{
  id: 17,
  title: 'Salmon Sandwich',
  description: 'Smoked salmon and cheddar cheese.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638917452850103050?width=172&amp;height=172',
  price: 100,
  delay: 100,
  category: 'Sushi Sandwich'
},
{
  id: 18,
  title: 'Crab Sandwich',
  description: 'Crab and cheddar cheese.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638917454068961118?width=172&amp;height=172',
  price: 100,
  delay: 100,
  category: 'Sushi Sandwich'
},
{
  id: 19,
  title: 'Shrimp Sandwich',
  description: 'Shrimp and cheddar cheese.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638917455326402529?width=172&amp;height=172',
  price: 100,
  delay: 100,
  category: 'Sushi Sandwich'
},
{
  id: 20,
  title: 'Junkan Salmon',
  description: 'Salmon and rice.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638893374564549592?width=172&amp;height=172',
  price: 100,
  delay: 100,
  category: 'Junkan'
},
{
  id: 21,
  title: 'Junkan Crab',
  description: 'Crab and rice.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638893375482560711?width=172&amp;height=172',
  price: 80,
  delay: 100,
  category: 'Junkan'
},
{
  id: 22,
  title: 'Junkan Shrimp',
  description: 'Shrimp and rice.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638893376362583538?width=172&amp;height=172',
  price: 100,
  delay: 100,
  category: 'Junkan'
},
{
  id: 23,
  title: 'Onagy Junkan',
  description: 'Rice and eel.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638894097999224111?width=172&amp;height=172',
  price: 100,
  delay: 100,
  category: 'Junkan'
},
{
  id: 24,
  title: 'Eel Roll',
  description: 'Eel, rice and cheese.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638894094618561353?width=172&amp;height=172',
  price: 200,
  delay: 100,
  category: 'Rolls'
},
{
  id: 25,
  title: 'Basa White Roll',
  description: 'Basa white fish, cheese and cucumber.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638858855596857484?width=172&amp;height=172',
  price: 110,
  delay: 100,
  category: 'Rolls'
},
{
  id: 26,
  title: 'New Style Philadelphia Roll',
  description: 'Cucumber, avocado, and smoked with cheese topping.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/%D9%86%D9%8A%D9%88_%D8%B3%D8%AA%D8%A7%D9%8A%D9%84_%D9%81%D8%A7%D9%84%D8%AF%D9%8A%D9%81%D9%8A%D8%A7638846844274479604.jpg?width=172&amp;height=172',
  price: 120,
  delay: 100,
  category: 'Rolls'
},
{
  id: 27,
  title: 'California Roll',
  description: 'Crab, cucumber and avocado.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/%D9%83%D8%A7%D9%84%D9%8A%D9%81%D9%88%D8%B1%D9%86%D9%8A%D8%A7638846844273626496.jpg?width=172&amp;height=172',
  price: 120,
  delay: 100,
  category: 'Rolls'
},
{
  id: 28,
  title: 'Pink Roll',
  description: 'Avocado and Tempura Topping Crab Mayonnaise.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/%D8%A8%D9%8A%D9%86%D9%83638846844273614792.jpg?width=172&amp;height=172',
  price: 120,
  delay: 100,
  category: 'Rolls'
},
{
  id: 29,
  title: 'Summer Roll',
  description: 'Cheese, cucumber, shrimp topping, salmon and avocado',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/%D8%B3%D9%85%D8%B1638846844278626599.jpg?width=172&amp;height=172',
  price: 120,
  delay: 100,
  category: 'Rolls'
},
{
  id: 30,
  title: 'Rocket Roll',
  description: 'Tempura, arugula, topping, crab mayonnaise and rice crispy.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/%D8%B1%D9%88%D9%83%D8%AA638846844272477718.jpg?width=172&amp;height=172',
  price: 120,
  delay: 100,
  category: 'Rolls'
},
{
  id: 31,
  title: 'Alaska Roll',
  description: 'Spicy Crab and Avocado Topping Spicy Crab.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/%D8%A7%D9%84%D8%A7%D8%B3%D9%83%D8%A7638846844277669457.jpg?width=172&amp;height=172',
  price: 120,
  delay: 100,
  category: 'Rolls'
},
{
  id: 32,
  title: 'Philadelphia Roll',
  description: 'Cheese, cucumber, and avocado with a smoked slice.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/%D9%81%D9%8A%D9%84%D8%A7%D8%AF%D9%8A%D9%84%D9%81%D9%8A%D8%A7638846844276504053.jpg?width=172&amp;height=172',
  price: 120,
  delay: 100,
  category: 'Rolls'
},
{
  id: 33,
  title: 'Saki Roll',
  description: 'Smoked cheese and Tempura Topping Salmon.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/%D8%B3%D8%A7%D9%83%D9%8A_638846844272766178.jpg?width=172&amp;height=172',
  price: 120,
  delay: 100,
  category: 'Rolls'
},
{
  id: 34,
  title: 'Flower Roll',
  description: 'Fried salmon, tempura and avocado with geisha.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/%D9%81%D9%84%D8%A7%D9%88%D8%B1_638846844282431498.jpg?width=172&amp;height=172',
  price: 120,
  delay: 100,
  category: 'Rolls'
},
{
  id: 35,
  title: 'Dragon Roll',
  description: 'Tempura and avocado with avocado topping.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/%D8%AF%D8%B1%D8%A7%D8%AC%D9%88%D9%86_638846844269731837.jpg?width=172&amp;height=172',
  price: 120,
  delay: 100,
  category: 'Rolls'
},
{
  id: 36,
  title: 'Dynamite Salmon Roll',
  description: 'Cheese, salmon and salmon topping.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/%D8%AF%D8%A7%D9%8A%D9%86%D8%A7%D9%85%D8%A7%DB%8C%D8%AA_%D8%B3%D8%A7%D9%84%D9%85%D9%88%D9%86638846844269504446.jpg?width=172&amp;height=172',
  price: 120,
  delay: 100,
  category: 'Rolls'
},
{
  id: 37,
  title: 'Dynamite Shrimp Roll',
  description: 'Cheese, shrimp, and salmon topping.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/%D8%AF%D8%A7%DB%8C%D9%86%D8%A7%D9%85%D8%A7%DB%8C%D8%AA_%D8%B4%D8%B1%DB%8C%D9%85%D9%BE638846844272472925.jpg?width=172&amp;height=172',
  price: 120,
  delay: 100,
  category: 'Rolls'
},
{
  id: 38,
  title: 'Dynamite Tempura Roll',
  description: 'Cheese and tempura salmon topping.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/%D8%AF%D8%A7%DB%8C%D9%86%D8%A7_%D9%85%D8%A7%D9%8A%D8%AA_%D8%AA%D9%85%D8%A8%D9%88%D8%B1%D8%A9638846844277645401.jpg?width=172&amp;height=172',
  price: 120,
  delay: 100,
  category: 'Rolls'
},
{
  id: 39,
  title: 'Dynamite Smoke Roll',
  description: 'Cheese, tempura and avocado topping smoked.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/%D8%AF%D8%A7%D9%8A%D9%86%D8%A7%D9%85%D8%A7%D9%8A%D8%AA_%D8%B3%D9%85%D9%88%D9%83638846844264462540.jpg?width=172&amp;height=172',
  price: 120,
  delay: 100,
  category: 'Rolls'
},
{
  id: 40,
  title: 'Smoke Premuda Roll',
  description: 'Avocado and tempura topping smoked.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/%D8%B3%D9%85%D9%88%D9%83_%D8%A8%D8%B1%D9%8A%D9%85%D9%8A%D9%88%D8%AF%D8%A7638846844276499464.jpg?width=172&amp;height=172',
  price: 120,
  delay: 100,
  category: 'Rolls'
},
{
  id: 41,
  title: 'Crispy Roll',
  description: 'Tempura and avocado.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/%D9%83%D8%B1%D9%8A%D8%B3%D8%A8%D9%8A638846844283445271.jpg?width=172&amp;height=172',
  price: 120,
  delay: 100,
  category: 'Rolls'
},
{
  id: 42,
  title: 'Geisha Premuda Roll',
  description: 'Smoked fried avocado topping geisha with crab mayonnaise.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/%D8%AC%D9%8A%D8%B4%D8%A7_%D8%A8%D8%B1%D9%8A%D9%85%D9%8A%D9%88%D8%A7%D8%AF638846844282471836.jpg?width=172&amp;height=172',
  price: 120,
  delay: 100,
  category: 'Rolls'
},
{
  id: 43,
  title: 'Hoso Salmon Roll',
  description: 'Rice and salmon.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/Hoso_Salmon638846845052746194.jpg?width=172&amp;height=172',
  price: 120,
  delay: 100,
  category: 'Rolls'
},
{
  id: 44,
  title: 'Hoso Crab Roll',
  description: 'Rice and crab.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/%D9%87%D9%88%D8%B3%D9%88_%D9%88_%D9%83%D8%B1%D8%A7%D8%A8638846844280638232.jpg?width=172&amp;height=172',
  price: 120,
  delay: 100,
  category: 'Rolls'
},
{
  id: 45,
  title: 'Hoso Tempura Roll',
  description: 'Rice and fried shrimp.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/%D9%87%D9%88%D8%B3%D9%88_%D8%AA%D9%85%D8%A8%D9%88%D8%B1%D8%A9638846844275516313.jpg?width=172&amp;height=172',
  price: 120,
  delay: 100,
  category: 'Rolls'
},
{
  id: 46,
  title: 'Hot Salmon Fried Rolls',
  description: 'Cheese and salmon.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638851925031521098?width=172&amp;height=172',
  price: 120,
  delay: 100,
  category: 'Fried Rolls'
},
{
  id: 47,
  title: 'White Crunchy Pangasius Roll',
  description: 'Pangasius white fish, kiri cheese, cucumber.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638858857861885429?width=172&amp;height=172',
  price: 110,
  delay: 100,
  category: 'Fried Rolls'
},
{
  id: 48,
  title: 'Hot Tempura Fried Rolls',
  description: 'Cheese and tempura.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/%D9%87%D9%88%D8%AA_%D8%AA%D8%A7%D9%85%D8%A8%D9%88%D8%B1%D8%A9638846844283439084.jpg?width=172&amp;height=172',
  price: 120,
  delay: 100,
  category: 'Fried Rolls'
},
{
  id: 49,
  title: 'Crunchy Tempura Fried Rolls',
  description: 'Cheese and tempura in war2et spring.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/%D9%83%D8%B1%D8%A7%D9%86%D8%B4%D9%89_%D8%AA%D8%A7%D9%85%D8%A8%D9%88%D8%B1%D8%A9638846844282531276.jpg?width=172&amp;height=172',
  price: 120,
  delay: 100,
  category: 'Fried Rolls'
},
{
  id: 50,
  title: 'Crunchy Salmon Fried Rolls',
  description: 'Cheese and salmon in war2et spring.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/%D9%83%D8%B1%D8%A7%D9%86%D8%B4%D9%8A_%D8%B3%D8%A7%D9%84%D9%85%D9%88%D9%86638846844281634478.jpg?width=172&amp;height=172',
  price: 120,
  delay: 100,
  category: 'Fried Rolls'
},
{
  id: 51,
  title: 'Crunchy Crab Fried Rolls',
  description: 'Cheese and crab in war2et spring.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/%D9%83%D8%B1%D8%A7%D9%86%D8%B4%D9%89_%D9%83%D8%B1%D8%A7%D8%A8638846844277778131.jpg?width=172&amp;height=172',
  price: 120,
  delay: 100,
  category: 'Fried Rolls'
},
{
  id: 52,
  title: 'Golden Fried Rolls',
  description: 'Cheese, crab and tempura.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638851925857418652?width=172&amp;height=172',
  price: 120,
  delay: 100,
  category: 'Fried Rolls'
},
{
  id: 53,
  title: 'Spicy Lemon Fried Rolls',
  description: 'Cheese, salmon and tempura.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638851927509357985?width=172&amp;height=172',
  price: 120,
  delay: 100,
  category: 'Fried Rolls'
},
{
  id: 54,
  title: 'Spider Fried Rolls',
  description: 'Fried salmon and tempura.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638851937523863482?width=172&amp;height=172',
  price: 120,
  delay: 100,
  category: 'Fried Rolls'
},
{
  id: 60,
  title: 'Mizo Crunchy Fried Rolls',
  description: 'Cheese, crab, salmon and tempura.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638851929029276210?width=172&amp;height=172',
  price: 130,
  delay: 100,
  category: 'Fried Rolls'
},
{
  id: 55,
  title: 'Dallas Fried Rolls',
  description: 'Cheese, tempura, and smoked slice.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/%D8%AF%D8%A7%D9%84%D8%A7%D8%B3638846844281590798.jpg?width=172&amp;height=172',
  price: 120,
  delay: 100,
  category: 'Fried Rolls'
},
{
  id: 56,
  title: 'New Hot Mizo Fried Rolls',
  description: 'Fried salmon and green onion.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638852743620725887?width=172&amp;height=172',
  price: 120,
  delay: 100,
  category: 'Fried Rolls'
},
{
  id: 57,
  title: 'Smoke Wasabi Fried rolls',
  description: 'Cheese, smoke, avocado, and crab.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/%D8%B3%D9%85%D9%88%D9%83_%D9%88%D8%A7%D8%B3%D8%A7%D8%A8%D9%89638846844274663345.jpg?width=172&amp;height=172',
  price: 130,
  delay: 100,
  category: 'Fried Rolls'
},
{
  id: 58,
  title: 'Dynamite Fried Rolls',
  description: 'Cheese, crab, and salmon.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638850791900501790?width=172&amp;height=172',
  price: 120,
  delay: 100,
  category: 'Fried Rolls'
},
{
  id: 59,
  title: 'Ninja Fried Rolls',
  description: 'Tempura and mozzarella cheese topping.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638851930548576129?width=172&amp;height=172',
  price: 120,
  delay: 100,
  category: 'Fried Rolls'
},

{
  id: 61,
  title: 'Teriyaki Sauce',
  description: 'Teriyaki sauce with sesame.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638863180723293609?width=172&amp;height=172',
  price: 25,
  delay: 100,
  category: 'Sauces'
},
{
  id: 62,
  title: 'Spicy Mayonis',
  description: 'Siratsha with mayo.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638863181355322605?width=172&amp;height=172',
  price: 25,
  delay: 100,
  category: 'Sauces'
},
{
  id: 63,
  title: 'Ginger',
  description: 'Ginger pickle spicy.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638863182386927675?width=172&amp;height=172',
  price: 25,
  delay: 100,
  category: 'Sauces'
},
{
  id: 64,
  title: 'Wasabi',
  description: 'Spicy wasabi.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638863182922805448?width=172&amp;height=172',
  price: 25,
  delay: 100,
  category: 'Sauces'
},
{
  id: 65,
  title: 'Soy Sauce',
  description: 'Sauce soya.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638869024421444449?width=172&amp;height=172',
  price: 25,
  delay: 100,
  category: 'Sauces'
},
{
  id: 66,
  title: 'Noodles',
  description: 'Pasta and vegetables.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/%D9%86%D9%88%D8%AF%D9%84%D8%B2638846844280744612.jpg?width=172&amp;height=172',
  price: 110,
  delay: 100,
  category: 'Noodles'
},
{
  id: 67,
  title: 'Meat Noodles',
  description: 'Noodles and meat pasta.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638851934160957659?width=172&amp;height=172',
  price: 190,
  delay: 100,
  category: 'Noodles'
},
{
  id: 68,
  title: 'Sea Noodles',
  description: 'Pasta and shrimp.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/%D9%86%D9%88%D8%AF%D9%84%D8%B2_%D8%B3%DB%8C638846844267633895.jpg?width=172&amp;height=172',
  price: 200,
  delay: 100,
  category: 'Noodles'
},
{
  id: 69,
  title: 'Salmon Nigiri',
  description: 'Rice and salmon.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638863172594007259?width=172&amp;height=172',
  price: 50,
  delay: 100,
  category: 'Nigiri'
},
{
  id: 70,
  title: 'Shrimp Nigiri',
  description: 'Rice and large shrimp.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638866632840536882?width=172&amp;height=172',
  price: 50,
  delay: 100,
  category: 'Nigiri'
},
{
  id: 71,
  title: 'Crab Nigiri',
  description: 'Rice and crab.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638866633795106160?width=172&amp;height=172',
  price: 50,
  delay: 100,
  category: 'Nigiri'
},
{
  id: 72,
  title: 'Crab Salad',
  description: 'Cucumber, carrot, crab and mayonnaise.',
  image: "./assets/sushi-image/cat-7-8.png",
  price: 130,
  delay: 100,
  category: 'Salad'
},
{
  id: 73,
  title: 'V Cola',
  description: 'Cola drink.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638906301459130513?width=172&amp;height=172',
  price: 30,
  delay: 100,
  category: 'Drinks'
},
{
  id: 74,
  title: 'Diet V Cola',
  description: 'Cola diet drink.',
  image: 'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638906303762509226?width=172&amp;height=172',
  price: 30,
  delay: 100,
  category: 'Drinks'
},

]
const Products = () => {


    // function clickBtn() {
    //     console.log('clicked')
    // }

    return (
        <div className='container pb-20'>
            <div className='container text-center w-full pt-24 pb-10'>
                <h1 className=' font-bold text-3xl dark:text-white'>Our Products</h1>
                <p className='text-sm text-gray-400 '>Explore Our Products</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-5'>
                {MenuData.map((data) => (
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
                                {/* Example description, replace with real data Delicious and fresh, made with premium ingredients. */}
                                
                                {data.description}
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-md font-bold text-white">
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