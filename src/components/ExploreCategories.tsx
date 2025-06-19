import ProductCard from "./ProductCard";


type CategoriesCard = {
    id: number;
    image: string;
    name: string;
    stock: number;
    bgColor: string
}

const categoriesCard: CategoriesCard[] = [
    {
        id: 1,
        image: 'images/img-1.png',
        name: 'Peach',
        stock: 20,
        bgColor: 'bg-red-100'
    },
    {
        id: 2,
        image: 'images/img-2.png',
        name: 'Vegetables',
        stock: 15,
        bgColor: 'bg-green-100'
    },
    {
        id: 3,
        image: 'images/img-3.png',
        name: 'Strawberry',
        stock: 10,
        bgColor: 'bg-blue-100'
    },
    {
        id: 4,
        image: 'images/img-4.png',
        name: 'Apple',
        stock: 5,
        bgColor: 'bg-yellow-100'
    },
    {
        id: 5,
        image: 'images/img-5.png',
        name: 'Orange',
        stock: 8,
        bgColor: 'bg-orange-100'
    },
    {
        id: 6,
        image: 'images/img-6.png',
        name: 'Potato',
        stock: 12,
        bgColor: 'bg-purple-100'
    },
    {
        id: 7,
        image: 'images/img-7.png',
        name: 'Carot',
        stock: 18,
        bgColor: 'bg-pink-100'
    },
]


const ExploreCategories = () => {

    const categories: string[] = ['All', 'Vegetables', 'Fruits', 'Coffee', 'Meat'];
 
    return (
    <div className="">
        <div className="flex justify-between py-20 px-18">
            <h1 className="text-3xl">Explore Categories</h1>
            <div className="flex space-x-6">
                {categories.map((category) => (
                    <button>{category}</button>
                ))}
            </div>
        </div>

        <div className="flex space-x-8 px-20 justify-between">
            {categoriesCard.map((card) => (
                <ProductCard key={card.id} 
                     name={card.name} image={card.image} 
                     stock={card.stock} bgColor={card.bgColor}
                />
            ))}
        </div>

    </div>
  )
}

export default ExploreCategories