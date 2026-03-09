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
    { name: 'Tiramisu', price: '$8.50' },
    { name: 'Black Forest', price: '$9.00' },
    { name: 'Chocolate Pistachio', price: '$9.50' },
    { name: 'Strawberry Cream', price: '$8.75' },
    { name: 'Mango Cream', price: '$8.75' },
  ],
  cheesecakes: [
    { name: 'Ube Macapuno Cheesecake', price: '$7.50' },
    { name: 'Cookies & Cream', price: '$7.00' },
    { name: 'Blueberry-topped Cheesecake', price: '$7.50' },
    { name: 'Burnt Basque', price: '$8.00' },
  ],
  cupcakes: [
    { name: 'Assorted Cupcakes', price: '$3.50' },
    { name: 'Brazo Cups', price: '$4.00' },
    { name: 'Mini Cakes', price: '$5.50' },
    { name: 'Number/Letter Cakes', price: '$12.00' },
  ],
  brownies: [
    { name: 'Brownies', price: '$3.00' },
    { name: 'Revel Bars', price: '$3.50' },
    { name: 'Fudge', price: '$3.25' },
    { name: 'Food for the Gods', price: '$3.75' },
  ],
  cookies: [
    { name: 'Assorted Cookies', price: '$2.50' },
    { name: 'Crinkles', price: '$2.75' },
    { name: 'Muffins', price: '$3.00' },
  ],
};
