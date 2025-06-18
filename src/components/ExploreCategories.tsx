import { ChevronLeft, ChevronRight } from "lucide-react";
import CategoriesCard from "./CategoriesCard";

const ExploreCategories = () => {
  const tabs: string[] = [
    "All",
    "Vegetables",
    "Fruits",
    "Coffee & teas",
    "Meat",
  ];

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 px-24 mt-20">
        <h2 className="text-2xl  text-gray-800">Explore Categories</h2>
        <div className="flex flex-wrap justify-center space-x-2 md:space-x-3 text-sm md:text-base">
          {tabs.map((tab) => (
            <button
              key={tab}
              className="py-1 px-2 rounded-md  text-gray-500 hover:text-green-600 hover:bg-green-50"
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="flex space-x-8 justify-between items-center px-6">
        <button className="prev-categories w-10 h-10 bg-white rounded-full shadow-lg hover:bg-gray-100  text-gray-600 ">
          <ChevronLeft />
        </button>
           <CategoriesCard name="Peach" items="20" image={"images/img-1.png"} bg="bg-red-50"/>
            <CategoriesCard name="Peach" items="20" image={"images/img-2.png"} bg="bg-red-50"/>
            <CategoriesCard name="Peach" items="20" image={"images/img-3.png"} bg="bg-red-50"/>
            <CategoriesCard name="Peach" items="20" image={"images/img-4.png"} bg="bg-red-50"/>
            <CategoriesCard name="Peach" items="20" image={"images/img-5.png"} bg="bg-red-50"/>
            <CategoriesCard name="Peach" items="20" image={"images/img-6.png"} bg="bg-red-50"/>
            <CategoriesCard name="Peach" items="20" image={"images/img-7.png"} bg="bg-red-50"/>
        <button className="prev-categories z-10  w-10 h-10 bg-white rounded-full shadow-lg hover:bg-gray-100  text-gray-600 ">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ExploreCategories;
