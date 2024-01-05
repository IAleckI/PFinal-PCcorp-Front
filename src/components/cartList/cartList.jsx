import Style from './cartList.module.css'


import { useEffect } from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import { GET_ALL_USER_PRODUCTS, GET_TOTAL_PRICE } from '../../utils/graphql/querys/products/getAllUserProducts'
import { getProductsRequest, getProducts } from '../../utils/state/features/products/productSlice'
import { useQuery } from '@apollo/client'
import { jwtDecode } from 'jwt-decode'
import CardCard from '../cartCards/cardCard'

export default function CartList() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    const email = jwtDecode(localStorage.getItem('USER_INFO')).email
    const { data, loading, error } = useQuery(GET_ALL_USER_PRODUCTS, {
        variables: { userId: email },
    })
    const result = useQuery(GET_TOTAL_PRICE, {
        variables: { userId: email },
    })

    useEffect(() => {
        dispatch(getProductsRequest())
        if (data) dispatch(getProducts(data.getAllUserProducts))
    },[data, dispatch])

    if (loading || result.loading) return <p>Cargando...</p>
    if (error) return <p>Error: {error.message}</p>    

    return (
        <div style={{display: 'flex'}}>
          <div className={Style.cartList}>
            {products.data?.map(p => (
                <CardCard key={p.id} props={p}/>
            ))}
          </div>
          <div>
           {result.data.getTotalPrice}
          </div>
        </div>
    )
}