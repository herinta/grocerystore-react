type ProductCardProps = {
  name: string;
  image: string;
  stock: number;
  bgColor: string;
};

const ProductCard = ({ name, image, stock, bgColor }: ProductCardProps) => {
  return (
    <div
      className={` ${bgColor} w-[153px] h-[194px] 
        text-center py-4 px-6 
      cursor-pointer hover:shadow-md rounded-lg`}
    >
      <img src={image} alt="" className="object-contain mb-3 " />
      <h1 className="font-semibold text-gray-800 text-sm mt-3">{name}</h1>
      <p className="text-xs text-gray-500">{stock} Items</p>
    </div>
  );
};

export default ProductCard;
