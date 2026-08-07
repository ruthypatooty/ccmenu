export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  ingredients?: string[];
  pairing?: string;
  image?: string;
};

export type MenuCategory =
  | 'cakes'
  | 'cheesecakes'
  | 'cupcakes'
  | 'brownies'
  | 'cookies'
  | 'main_dish'
  | 'pasta'
  | 'bespoke_cakes';

export const menuData: Record<MenuCategory, MenuItem[]> = {
  cakes: [
    { name: 'Alcapone Vanilla Cake', price: '₱980.00', image: '/menu/Alcapone_Vanilla_Cake-qc-quezoncity-commonwealth-manila.png' },
    { name: 'Baileys Irish Cream Cake with White Chocolate', price: '₱1,150.00', image: '/menu/Baileys_Irish_Cream_Cake_with_White_Chocolate-qc-quezoncity-commonwealth-manila.png' },
    { name: 'Black Forest Cake', price: '₱980.00', image: '/menu/Black_Forest_Cake-qc-quezoncity-commonwealth-manila.jpg' },
    { name: 'Chocolate Pistachio Cake', price: '₱1,600.00', image: '/menu/Chocolate_Pistachio_Cake-qc-quezoncity-commonwealth-manila.jpg' },
    { name: 'Chocolate Pistachio Cake (Junior)', price: '₱950.00', image: '/menu/Chocolate_Pistachio_Cake_(Junior)-qc-quezoncity-commonwealth-manila.jpg' },
    { name: 'Caramel Honeycomb Crunch Cake', price: '₱950.00', image: '/menu/Caramel_Honeycomb_Crunch_Cake-qc-quezoncity-commonwealth-manila.jpg' },
    { name: 'Carrot Walnut Cake', price: '₱980.00', image: '/menu/Carrot_Walnut_Cake-qc-quezoncity-commonwealth-manila.png' },
    { name: 'Classic Chocolate Cake', price: '₱980.00', image: '/menu/Classic_Chocolate_Cake-qc-quezoncity-commonwealth-manila.png' },
    { name: 'Classic Mocha Cake', price: '₱880.00', image: '/menu/Classic_Mocha_Cake-qc-quezoncity-commonwealth-manila.png' },
    { name: 'Classic Sansrival Cake', price: '₱950.00', image: '/menu/Classic_Sansrival_Cake-qc-quezoncity-commonwealth-manila.jpg' },
    { name: 'Classic Ube Macapuno Cake', price: '₱980.00', image: '/menu/Classic_Ube_Macapuno_Cake-qc-quezoncity-commonwealth-manila.jpg' },
    { name: 'Chocolate Truffle Cake with Strawberries', price: '₱1,150.00', image: '/menu/Chocolate_Truffle_Cake_with_Strawberries-qc-quezoncity-commonwealth-manila.png' },
    { name: 'Espresso Walnut Praline Cake', price: '₱980.00', image: '/menu/Espresso_Walnut_Praline_Cake-qc-quezoncity-commonwealth-manila.png' },
    { name: 'Fresh Berry Cream Cake', price: '₱1,250.00', image: '/menu/Fresh_Berry_Cream_Cake-qc-quezoncity-commonwealth-manila.png' },
    { name: 'Mango Cream Cake', price: '₱980.00', image: '/menu/Mango_Cream_Cake-qc-quezoncity-commonwealth-manila.png' },
    { name: 'Mango Graham Mousse Cake', price: '₱880.00', image: '/menu/Mango_Graham_Mousse_Cake-qc-quezoncity-commonwealth-manila.png' },
    { name: 'Mango Tres Leches Cake', price: '₱1,200.00', image: '/menu/Mango_Tres_Leches_Cake-qc-quezoncity-commonwealth-manila.png' },
    { name: 'Matcha Strawberry Cake', price: '₱990.00', image: '/menu/Matcha_Strawberry_Cake-qc-quezoncity-commonwealth-manila.png' },
    { name: 'Red Velvet Cake', price: '₱950.00', image: '/menu/Red_Velvet_Cake-qc-quezoncity-commonwealth-manila.png' },
    { name: "S'mores Cake", price: '₱900.00', image: '/menu/Smores_Cake-qc-quezoncity-commonwealth-manila.png' },
    { name: 'Salted Caramel Cake', price: '₱880.00', image: '/menu/Salted_Caramel_Cake-qc-quezoncity-commonwealth-manila.jpg' },
    { name: 'Strawberry Cream Cake', price: '₱1,100.00', image: '/menu/Strawberry_Cream_Cake-qc-quezoncity-commonwealth-manila.png' },
    { name: 'Tiramisu', price: '₱1,200.00', image: '/menu/Tiramisu-qc-quezoncity-commonwealth-manila.jpg' },
    { name: 'Tres Leches Cake', price: '₱1,300.00', image: '/menu/Tres_Leches_Cake-qc-quezoncity-commonwealth-manila.png' }
  ],
  cheesecakes: [
    { name: 'Banoffee Cheesecake', price: '₱980.00', image: '/menu/Banoffee_Cheesecake-qc-quezoncity-commonwealth-manila.png' },
    { name: 'Biscoff Cheesecake', price: '₱1,100.00', image: '/menu/Biscoff_Cheesecake-qc-quezoncity-commonwealth-manila.png' },
    { name: 'Blueberry Cheesecake', price: '₱980.00', image: '/menu/Blueberry_Cheesecake-qc-quezoncity-commonwealth-manila.png' },
    { name: 'Cookies and Cream Cheesecake', price: '₱980.00', image: '/menu/Cookies_and_Cream_Cheesecake-qc-quezoncity-commonwealth-manila.jpg' },
    { name: 'Fresh Berry Cheesecake', price: '₱1,250.00', image: '/menu/Fresh_Berry_Cheesecake-qc-quezoncity-commonwealth-manila.png' },
    { name: 'Green Tea Latte Cheesecake', price: '₱980.00', image: '/menu/Green_Tea_Latte_Cheesecake-qc-quezoncity-commonwealth-manila.jpg' },
    { name: 'Limone Dolce Cheesecake', price: '₱980.00', image: '/menu/Limone_Dolce_Cheesecake-qc-quezoncity-commonwealth-manila.jpg' },
    { name: 'Strawberry Cheesecake', price: '₱980.00', image: '/menu/Strawberry_Cheesecake-qc-quezoncity-commonwealth-manila.jpg' },
    { name: 'Ube Macapuno Cheesecake', price: '₱980.00', image: '/menu/Ube_Macapuno_Cheesecake-qc-quezoncity-commonwealth-manila.jpg' }
  ],
  cupcakes: [
    { name: 'Brazo Cups', price: '₱580.00', image: '/menu/Brazo_Cups-qc-quezoncity-commonwealth-manila.jpg' },
    { name: 'Carrot Walnut Cupcakes', price: '₱750.00', image: '/menu/Carrot_Walnut_Cupcakes-qc-quezoncity-commonwealth-manila.png' },
    { name: 'Chocolate Cupcakes', price: '₱700.00', image: '/menu/Chocolate_Cupcakes-qc-quezoncity-commonwealth-manila.jpg' },
    { name: 'Chocolate Truffle Cupcakes', price: '₱890.00', image: '/menu/Chocolate_Truffle_Cupcakes-qc-quezoncity-commonwealth-manila.jpg' },
    { name: 'Fully Loaded Cupcakes', price: '₱750.00', image: '/menu/Fully_Loaded_Cupcakes-qc-quezoncity-commonwealth-manila.jpg' },
    { name: 'Funfetti Cupcakes', price: '₱650.00', image: '/menu/Funfetti_Cupcakes-qc-quezoncity-commonwealth-manila.jpg' },
    { name: 'Mango Cream Cupcakes', price: '₱680.00', image: '/menu/Mango_Cream_Cupcakes-qc-quezoncity-commonwealth-manila.jpg' },
    { name: 'Premium Chocolate Cupcakes', price: '₱950.00', image: '/menu/Premium_Chocolate_Cupcakes-qc-quezoncity-commonwealth-manila.png' },
    { name: 'Red Velvet Cupcakes', price: '₱700.00', image: '/menu/Red_Velvet_Cupcakes-qc-quezoncity-commonwealth-manila.png' },
    { name: 'Tres Leches Cupcakes', price: '₱750.00', image: '/menu/Tres_Leches_Cupcakes-qc-quezoncity-commonwealth-manila.jpg' }
  ],
  brownies: [
    { name: 'Cream Cheese Swirl Brownies', price: '₱450.00', image: '/menu/Cream_Cheese_Swirl_Brownies-qc-quezoncity-commonwealth-manila.jpg' },
    { name: 'Dark Chocolate Brownies', price: '₱450.00', image: '/menu/Dark_Chocolate_Brownies-qc-quezoncity-commonwealth-manila.png' },
    { name: 'Four Shades of Fudge', price: '₱600.00', image: '/menu/Four_Shades_of_Fudge-qc-quezoncity-commonwealth-manila.jpg' },
    { name: 'Revel Bars', price: '₱450.00', image: '/menu/Revel_Bars-qc-quezoncity-commonwealth-manila.jpg' },
    { name: 'Walnut Brownies', price: '₱450.00', image: '/menu/Walnut_Brownies-qc-quezoncity-commonwealth-manila.jpg' }
  ],
  cookies: [
    { name: 'Chocolate Chip Cookies', price: '₱430.00', image: '/menu/Chocolate_Chip_Cookies-qc-quezoncity-commonwealth-manila.jpg' },
    { name: 'Chocolate Crinkles', price: '₱350.00', image: '/menu/Chocolate_Crinkles-qc-quezoncity-commonwealth-manila.jpg' },
    { name: 'Double Chocolate Muffins', price: '₱600.00', image: '/menu/Double_Chocolate_Muffins-qc-quezoncity-commonwealth-manila.jpg' },
    { name: 'Banana Walnut Muffins', price: '₱600.00', image: '/menu/Banana_Walnut_Muffins-qc-quezoncity-commonwealth-manila.jpg' }
  ],
  pasta: [
    {
      name: 'Truffle Pasta',
      price: '₱780.00',
      description: 'Creamy pasta tossed in black truffle sauce with a rich, earthy finish and parmesan on top.',
      ingredients: ['Fettuccine pasta', 'Black truffle cream sauce', 'Parmesan cheese', 'Garlic confit'],
      pairing: 'Best paired with sparkling water with lemon or an iced latte.',
      image: '/menu/Chelles_Creamy_Black_Truffle_Pasta-qc-quezoncity-commonwealth-manila.jpg',
    },
    {
      name: 'Seafood Marinara',
      price: '₱710.00',
      description: 'Tomato-based marinara loaded with shrimp, mussels, and squid, simmered with herbs and olive oil.',
      ingredients: ['Spaghetti pasta', 'Shrimp and mussels', 'Squid rings', 'Marinara sauce'],
      pairing: 'Great with chilled citrus soda or a light white grape drink.',
      image: '/menu/Seafood_Marinara-qc-quezoncity-commonwealth-manila.jpg',
    },
    {
      name: 'Spaghetti Meatballs',
      price: '₱710.00',
      description: 'Classic spaghetti in slow-cooked tomato sauce topped with juicy beef meatballs and fresh basil.',
      ingredients: ['Spaghetti pasta', 'Beef meatballs', 'Tomato herb sauce', 'Grated parmesan'],
      pairing: 'Perfect with iced tea, cola, or cold brew coffee.',
      image: '/menu/Spaghetti_Meatballs-qc-quezoncity-commonwealth-manila.jpg',
    },
    {
      name: 'Lasagna',
      price: '₱880.00',
      description: 'Layered pasta sheets with savory meat sauce, creamy bechamel, and three-cheese topping baked until golden.',
      ingredients: ['Lasagna sheets', 'Beef ragu', 'Bechamel sauce', 'Mozzarella and parmesan'],
      pairing: 'Pairs nicely with lemonade, house blend iced tea, or sparkling apple juice.',
      image: '/menu/3-Cheese_Lasagna-qc-quezoncity-commonwealth-manila.jpg',
    },
    {
      name: 'Cheesy Penne',
      price: '₱710.00',
      description: 'Oven-baked penne in creamy tomato sauce with a generous cheesy melt and toasted herb crumbs.',
      ingredients: ['Penne pasta', 'Creamy tomato sauce', 'Cheddar and mozzarella', 'Herb bread crumbs'],
      pairing: 'Best enjoyed with iced mocha, peach tea, or calamansi juice.',
      image: '/menu/Cheesy_Baked_Penne-qc-quezoncity-commonwealth-manila.jpg',
    },
  ],
  main_dish: [
    {
      name: 'Seafood Boil',
      price: '₱890.00',
      description: 'A generous seafood boil with prawns, mussels, and crab tossed in aromatic butter and spices.',
      ingredients: ['Prawns', 'Mussels', 'Crab', 'Garlic butter broth'],
      pairing: 'Pairs well with chilled soda or a light sparkling drink.',
      image: '/menu/Chelles_Special_Seafood_Boil-qc-quezoncity-commonwealth-manila.jpg',
    },
    {
      name: 'Hickory Ribs',
      price: '₱950.00',
      description: 'Slow-cooked pork ribs glazed with a smoky hickory barbecue sauce and finished on the grill.',
      ingredients: ['Pork ribs', 'Hickory barbecue glaze', 'Smoked spices'],
      pairing: 'Enjoy with iced tea, cola, or a cold craft soda.',
      image: '/menu/Hickory_Pork_Ribs-qc-quezoncity-commonwealth-manila.jpg',
    },
    {
      name: 'Chicken Cordon',
      price: '₱750.00',
      description: 'Breaded chicken stuffed with ham and cheese, served with creamy garlic sauce.',
      ingredients: ['Chicken breast', 'Ham', 'Melted cheese', 'Creamy garlic sauce'],
      pairing: 'Served best with lemonade or a light iced coffee.',
      image: '/menu/Chicken_Cordon_Bleu_with_Creamy_Garlic_Sauce-qc-quezoncity-commonwealth-manila.jpg',
    },
    {
      name: 'Roast Beef',
      price: '₱920.00',
      description: 'Tender roast beef carved and served with pan jus and roasted root vegetables.',
      ingredients: ['Beef roast', 'Pan jus', 'Roasted vegetables'],
      pairing: 'Pairs nicely with house iced tea or sparkling apple juice.',
      image: '/menu/Chelles_Special_Roast_Beef-qc-quezoncity-commonwealth-manila.jpg',
    },
  ],
  bespoke_cakes: [
    {
      name: 'Fully Loaded Chocolate Cake',
      price: '',
      image: '/menu/Fully_Loaded_Chocolate_Cake-qc-quezoncity-commonwealth-manila.jpg'
    }
  ],
};
