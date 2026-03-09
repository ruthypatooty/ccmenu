export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  image?: string;
};

export type MenuCategory =
  | 'cakes'
  | 'cheesecakes'
  | 'cupcakes'
  | 'brownies'
  | 'cookies';

export const menuData: Record<MenuCategory, MenuItem[]> = {
  cakes: [
    { name: 'Tiramisu', price: '$9.50', image: '/menu/Tiramisu.jpg' },
    { name: 'Black Forest Cake', price: '$10.00', image: '/menu/Black_Forest_Cake.jpg' },
    { name: 'Chocolate Pistachio Cake', price: '$10.50', image: '/menu/Chocolate_Pistachio_Cake.jpg' },
    { name: 'Chocolate Pistachio (Junior)', price: '$6.50', image: '/menu/Chocolate_Pistachio_Cake_(Junior).jpg' },
    { name: 'Caramel Honeycomb Crunch Cake', price: '$9.75', image: '/menu/Caramel_Honeycomb_Crunch_Cake.jpg' },
    { name: 'Classic Sansrival Cake', price: '$9.00', image: '/menu/Classic_Sansrival_Cake.jpg' },
    { name: 'Ube Macapuno Cake', price: '$9.25', image: '/menu/Classic_Ube_Macapuno_Cake.jpg' },
    { name: 'Fully Loaded Chocolate Cake', price: '$11.00', image: '/menu/Fully_Loaded_Chocolate_Cake.jpg' },
    { name: 'Salted Caramel Cake', price: '$9.25', image: '/menu/Salted_Caramel_Cake.jpg' },
    { name: 'Tiramisu (Slice)', price: '$4.50', image: '/menu/Tiramisu.jpg' },
  ],
  cheesecakes: [
    { name: 'Cookies & Cream Cheesecake', price: '$7.50', image: '/menu/Cookies_and_Cream_Cheesecake.jpg' },
    { name: 'Fresh Berry Cheesecake (Minis)', price: '$6.50', image: '/menu/Fresh_Berry_Cheesecake_Minis.jpg' },
    { name: 'Green Tea Latte Cheesecake', price: '$7.75', image: '/menu/Green_Tea_Latte_Cheesecake.jpg' },
    { name: 'Limone Dolce Cheesecake', price: '$7.80', image: '/menu/Limone_Dolce_Cheesecake.jpg' },
    { name: 'Strawberry Cheesecake', price: '$7.25', image: '/menu/Strawberry_Cheesecake.jpg' },
    { name: 'Ube Macapuno Cheesecake', price: '$8.00', image: '/menu/Ube_Macapuno_Cheesecake.jpg' },
  ],
  cupcakes: [
    { name: 'Brazo Cups', price: '$4.00', image: '/menu/Brazo_Cups.jpg' },
    { name: 'Chocolate Cupcakes', price: '$3.50', image: '/menu/Chocolate_Cupcakes.jpg' },
    { name: 'Chocolate Truffle Cupcakes', price: '$4.25', image: '/menu/Chocolate_Truffle_Cupcakes.jpg' },
    { name: 'Fully Loaded Cupcakes', price: '$4.50', image: '/menu/Fully_Loaded_Cupcakes.jpg' },
    { name: 'Funfetti Cupcakes', price: '$3.75', image: '/menu/Funfetti_Cupcakes.jpg' },
    { name: 'Mango Cream Cupcakes', price: '$3.95', image: '/menu/Mango_Cream_Cupcakes.jpg' },
    { name: 'Tres Leches Cupcakes', price: '$4.00', image: '/menu/Tres_Leches_Cupcakes.jpg' },
    { name: 'Naked Letter Cake', price: '$25.00', image: '/menu/Naked_Letter_Cake.jpg' },
    { name: 'Naked Number Cake', price: '$25.00', image: '/menu/Naked_Number_Cake.jpg' },
  ],
  brownies: [
    { name: 'Cream Cheese Swirl Brownies', price: '$3.25', image: '/menu/Cream_Cheese_Swirl_Brownies.jpg' },
    { name: 'Four Shades of Fudge', price: '$3.75', image: '/menu/Four_Shades_of_Fudge.jpg' },
    { name: 'Revel Bars', price: '$3.50', image: '/menu/Revel_Bars.jpg' },
    { name: 'Walnut Brownies', price: '$3.00', image: '/menu/Walnut_Brownies.jpg' },
  ],
  cookies: [
    { name: 'Chocolate Chip Cookies', price: '$2.50', image: '/menu/Chocolate_Chip_Cookies.jpg' },
    { name: 'Chocolate Crinkles', price: '$2.75', image: '/menu/Chocolate_Crinkles.jpg' },
    { name: 'Double Chocolate Muffins', price: '$3.00', image: '/menu/Double_Chocolate_Muffins.jpg' },
    { name: 'Banana Walnut Muffins', price: '$3.00', image: '/menu/Banana_Walnut_Muffins.jpg' },
  ],
};
