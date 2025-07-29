
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type ExtraItem = {
  id: string;
  name: string;
  price: number;
};

const extraItems: ExtraItem[] = [
  { id: "denah", name: "Denah", price: 1000 },
  { id: "kupon", name: "Kupon Souvenir", price: 300 },
  { id: "guestbook_reg", name: "Guestbook Reguler", price: 100000 },
  { id: "guestbook_popup", name: "Guestbook Popup", price: 120000 },
];

export default function ExtraItemSelector() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const total = selectedItems.reduce((sum, id) => {
    const item = extraItems.find((item) => item.id === id);
    return sum + (item?.price || 0);
  }, 0);

  return (
    <div className="m-4 p-4 bg-white border rounded max-w-xl mx-auto">
      <h2 className="text-lg mb-4">Penambahan Item</h2>

      <div className="space-y-4">
        {extraItems.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <Checkbox
              id={item.id}
              checked={selectedItems.includes(item.id)}
              onCheckedChange={() => handleToggle(item.id)}
            />
            <Label htmlFor={item.id} className="flex-1 font-normal text-xs">
              {item.name} <span className="text-gray-500">Rp{item.price.toLocaleString()}</span>
            </Label>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right text-normal">
        Total Tambahan: Rp{total.toLocaleString()}
      </div>
    </div>
  );
}

