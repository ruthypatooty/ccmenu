import { MenuItem as MenuItemType } from '@/data/menuData';
import MenuItem from './MenuItem';

type MenuListProps = {
  items: MenuItemType[];
};

export default function MenuList({ items }: MenuListProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {items.map((item, idx) => (
        <MenuItem key={idx} item={item} />
      ))}
    </div>
  );
}
