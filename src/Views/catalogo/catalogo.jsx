import { NavBar, Banner, CardList } from "../../components/Index"
import { useProducts } from "../../utils/hooks/products/useProducts"

export default function Catalogo () {
    useProducts()
    return (
        <main>
            <NavBar/>
            <Banner/>
            <CardList/>
        </main>
    )
}