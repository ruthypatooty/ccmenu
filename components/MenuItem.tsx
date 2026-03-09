import { MenuItem as MenuItemType } from '@/data/menuData';

type MenuItemProps = {
  item: MenuItemType;
};

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <div className="flex flex-col items-start gap-2 rounded-lg border border-slate-100 p-4 shadow-sm">
      <div className="text-lg font-semibold text-slate-900">{item.name}</div>
      <div className="text-sm text-slate-600">{item.description ?? ''}</div>
      <div className="mt-2 text-sm font-medium text-slate-800">{item.price}</div>
    </div>
  );
}
