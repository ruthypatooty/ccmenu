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
    { name: 'Alcapone Vanilla Cake', price: '₱980.00', image: '/menu/Alcapone_Vanilla_Cake.png' },
    { name: 'Baileys Irish Cream Cake with White Chocolate', price: '₱980.00', image: '/menu/Baileys_Irish_Cream_Cake_with_White_Chocolate.png' },
    { name: 'Black Forest Cake', price: '₱980.00', image: '/menu/Black_Forest_Cake.jpg' },
    { name: 'Chocolate Pistachio Cake', price: '₱1,550.00', image: '/menu/Chocolate_Pistachio_Cake.jpg' },
    { name: 'Chocolate Pistachio Cake (Junior)', price: '₱950.00', image: '/menu/Chocolate_Pistachio_Cake_(Junior).jpg' },
    { name: 'Caramel Honeycomb Crunch Cake', price: '₱880.00', image: '/menu/Caramel_Honeycomb_Crunch_Cake.jpg' },
    { name: 'Carrot Walnut Cake', price: '₱980.00', image: '/menu/Carrot_Walnut_Cake.png' },
    { name: 'Classic Chocolate Cake', price: '₱980.00', image: '/menu/Classic_Chocolate_Cake.png' },
    { name: 'Classic Mocha Cake', price: '₱880.00', image: '/menu/Classic_Mocha_Cake.png' },
    { name: 'Classic Sansrival Cake', price: '₱950.00', image: '/menu/Classic_Sansrival_Cake.jpg' },
    { name: 'Classic Ube Macapuno Cake', price: '₱980.00', image: '/menu/Classic_Ube_Macapuno_Cake.jpg' },
    { name: 'Chocolate Truffle Cake with Strawberries', price: '₱1,150.00', image: '/menu/Chocolate_Truffle_Cake_with_Strawberries.png' },
    { name: 'Espresso Walnut Praline Cake', price: '₱980.00', image: '/menu/Espresso_Walnut_Praline_Cake.png' },
    { name: 'Ferrero Bueno Chocolate Cake', price: '₱2,550.00', image: '/menu/Ferrero_Bueno_Chocolate_Cake.png' },
    { name: 'Fresh Berry Cream Cake', price: '₱1,250.00', image: '/menu/Fresh_Berry_Cream_Cake.png' },
    { name: 'Fully Loaded Chocolate Cake', price: '₱1,500.00', image: '/menu/Fully_Loaded_Chocolate_Cake.jpg' },
    { name: 'Mango Cream Cake', price: '₱980.00', image: '/menu/Mango_Cream_Cake.png' },
    { name: 'Mango Graham Mousse Cake', price: '₱880.00', image: '/menu/Mango_Graham_Mousse_Cake.png' },
    { name: 'Mango Tres Leches Cake', price: '₱1,200.00', image: '/menu/Mango_Tres_Leches_Cake.png' },
    { name: 'Matcha Strawberry Cake', price: '₱990.00', image: '/menu/Matcha_Strawberry_Cake.png' },
    { name: 'Red Velvet Cake', price: '₱950.00', image: '/menu/Red_Velvet_Cake.png' },
    { name: "S'mores Cake", price: '₱900.00', image: '/menu/Smores_Cake.png' },
    { name: 'Salted Caramel Cake', price: '₱880.00', image: '/menu/Salted_Caramel_Cake.jpg' },
    { name: 'Strawberry Cream Cake', price: '₱990.00', image: '/menu/Strawberry_Cream_Cake.png' },
    { name: 'Tiramisu', price: '₱1,200.00', image: '/menu/Tiramisu.jpg' },
    { name: 'Tres Leches Cake', price: '₱1,300.00', image: '/menu/Tres_Leches_Cake.png' }
  ],
  cheesecakes: [
    { name: 'Banoffee Cheesecake', price: '₱980.00', image: '/menu/Banoffee_Cheesecake.png' },
    { name: 'Biscoff Cheesecake', price: '₱1,100.00', image: '/menu/Biscoff_Cheesecake.png' },
    { name: 'Biscoff Cheesecake Minis', price: '₱850.00', image: '/menu/Biscoff_Cheesecake_Minis.png' },
    { name: 'Blueberry Cheesecake', price: '₱980.00', image: '/menu/Blueberry_Cheesecake.png' },
    { name: 'Blueberry Cheesecake Minis', price: '₱750.00', image: '/menu/Blueberry_Cheesecake_Minis.png' },
    { name: 'Cookies and Cream Cheesecake', price: '₱980.00', image: '/menu/Cookies_and_Cream_Cheesecake.jpg' },
    { name: 'Fresh Berry Cheesecake', price: '₱1,250.00', image: '/menu/Fresh_Berry_Cheesecake.png' },
    { name: 'Fresh Berry Cheesecake Minis', price: '₱890.00', image: '/menu/Fresh_Berry_Cheesecake_Minis.jpg' },
    { name: 'Green Tea Latte Cheesecake', price: '₱980.00', image: '/menu/Green_Tea_Latte_Cheesecake.jpg' },
    { name: 'Limone Dolce Cheesecake', price: '₱980.00', image: '/menu/Limone_Dolce_Cheesecake.jpg' },
    { name: 'Strawberry Cheesecake', price: '₱980.00', image: '/menu/Strawberry_Cheesecake.jpg' },
    { name: 'Ube Macapuno Cheesecake', price: '₱980.00', image: '/menu/Ube_Macapuno_Cheesecake.jpg' }
  ],
  cupcakes: [
    { name: 'Brazo Cups', price: '₱580.00', image: '/menu/Brazo_Cups.jpg' },
    { name: 'Carrot Walnut Cupcakes', price: '₱750.00', image: '/menu/Carrot_Walnut_Cupcakes.png' },
    { name: 'Chocolate Cupcakes', price: '₱700.00', image: '/menu/Chocolate_Cupcakes.jpg' },
    { name: 'Chocolate Truffle Cupcakes', price: '₱890.00', image: '/menu/Chocolate_Truffle_Cupcakes.jpg' },
    { name: 'Fully Loaded Cupcakes', price: '₱750.00', image: '/menu/Fully_Loaded_Cupcakes.jpg' },
    { name: 'Funfetti Cupcakes', price: '₱650.00', image: '/menu/Funfetti_Cupcakes.jpg' },
    { name: 'Mango Cream Cupcakes', price: '₱680.00', image: '/menu/Mango_Cream_Cupcakes.jpg' },
    { name: 'Premium Chocolate Cupcakes', price: '₱950.00', image: '/menu/Premium_Chocolate_Cupcakes.png' },
    { name: 'Red Velvet Cupcakes', price: '₱700.00', image: '/menu/Red_Velvet_Cupcakes.png' },
    { name: 'Tres Leches Cupcakes', price: '₱750.00', image: '/menu/Tres_Leches_Cupcakes.jpg' }
  ],
  brownies: [
    { name: 'Cream Cheese Swirl Brownies', price: '₱450.00', image: '/menu/Cream_Cheese_Swirl_Brownies.jpg' },
    { name: 'Dark Chocolate Brownies', price: '₱400.00', image: '/menu/Dark_Chocolate_Brownies.png' },
    { name: 'Four Shades of Fudge', price: '₱600.00', image: '/menu/Four_Shades_of_Fudge.jpg' },
    { name: 'Revel Bars', price: '₱450.00', image: '/menu/Revel_Bars.jpg' },
    { name: 'Walnut Brownies', price: '₱400.00', image: '/menu/Walnut_Brownies.jpg' }
  ],
  cookies: [
    { name: 'Chocolate Chip Cookies', price: '₱430.00', image: '/menu/Chocolate_Chip_Cookies.jpg' },
    { name: 'Chocolate Crinkles', price: '₱350.00', image: '/menu/Chocolate_Crinkles.jpg' },
    { name: 'Double Chocolate Muffins', price: '₱600.00', image: '/menu/Double_Chocolate_Muffins.jpg' },
    { name: 'Banana Walnut Muffins', price: '₱600.00', image: '/menu/Banana_Walnut_Muffins.jpg' }
  ],
};
