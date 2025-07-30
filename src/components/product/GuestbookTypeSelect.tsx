const GuestbookSizeSelect = ({ value, onChange }) => {
  return (
    <div className="flex flex-col gap-2 pt-2">
      <label className="text-sm">Ukuran Guestbook</label>
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="border rounded px-2 py-1"
      >
        <option value="">-- Pilih Ukuran Guestbook --</option>
        <option value="large">Besar</option>
        <option value="medium">Sedang</option>
        <option value="small">Kecil</option>
      </select>
    </div>
  );
};

export default GuestbookSizeSelect;
