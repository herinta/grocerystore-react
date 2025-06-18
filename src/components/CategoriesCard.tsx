
type CategoriesProps = {
  name: string;
  items: number | string;
  image: string;
  bg: string;
}

const CategoriesCard = ({name, items, image, bg}: CategoriesProps) => {
  return (
        <div className={`${bg} w-[1539px] h-[194px] text-center py-4 px-6 cursor-pointer hover:shadow-md rounded-lg`}>
            <img
                src={image}
                alt=""
                className="object-contain mb-3 "
            />
            <h1 className="font-semibold text-gray-800 text-sm mt-3">
               {name}
            </h1>
            <p className="text-xs text-gray-500">{items} Items</p>
        </div>
    
  )
}

export default CategoriesCard