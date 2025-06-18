const Cart = () => {
  return (
    <div className="fixed right-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-64">
        <h2 className="text-md font-semibold">Daftar Belanja Saya</h2>
        <ul className="mt-4 space-y-2">
          <li className="flex justify-between items-center">
            <span>Produk 1</span>
            <span>Rp 10.000</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cart;
