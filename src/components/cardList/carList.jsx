import Style from './cardList.module.css'
import Card from '../card/card'
import { useSelector } from 'react-redux'

export default function CardList({ firstIndex, lastIndex, currentProducts}) {
    const products = useSelector(state => state.products)

    if (products.loading) return <div>Loading...</div>
    if (products.error) return <div>Error: {products.error}</div>

    return (
        <section className={Style.container}>
            {currentProducts?.map((p) => (
                <Card key={p.id} props={p} />
            )).slice(firstIndex, lastIndex)}
        </section>
    )

}