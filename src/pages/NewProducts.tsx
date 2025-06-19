import AllProduct from "../components/AllProduct"
import Header from "../components/Header"

const NewProducts = () => {
  return (
    <div>
         <Header />
         <div className="px-30 py-10">
            <h1 className="text-3xl font-semibold mb-10">New Products</h1>
            <AllProduct />
         </div>
        
        
    </div>
  )
}

export default NewProducts