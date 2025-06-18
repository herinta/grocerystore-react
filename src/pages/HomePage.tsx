import ExploreCategories from "../components/ExploreCategories"
import FeaturedProducts from "../components/FeaturedProducts"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"


const HomePage = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
        <Hero />
        <ExploreCategories />
        <FeaturedProducts />
    </div>
  )
}

export default HomePage