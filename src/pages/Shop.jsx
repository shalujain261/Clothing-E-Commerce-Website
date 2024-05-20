import Hero from "../component/Hero/Hero"
import Footer from "../component/footer/Footer"
import NewCollection from "../component/newCollections/NewCollection"
import NewsLetter from "../component/newsLetter/NewsLetter"
import Offers from "../component/offers/Offers"
import Popular from "../component/popular/Popular"



const Shop = () => {
  return (
    <div>
        <Hero />
        <Popular />
        <Offers />
        <NewCollection />
        <NewsLetter />
    </div>
  )
}

export default Shop