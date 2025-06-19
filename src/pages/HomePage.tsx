
import ExploreCategories from "../components/ExploreCategories"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"



const HomePage = () => {
  return (
    <div>
        <Header />
        <Navbar/>
        <Hero />
        <ExploreCategories />
    </div>
  )
}

export default HomePage