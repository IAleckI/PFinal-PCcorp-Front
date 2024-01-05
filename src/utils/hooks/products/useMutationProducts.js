import { useMutation, useQuery } from '@apollo/client'
import { ADD_PRODUCT_TO_CART } from '../../graphql/mutations/products/addProduct'
import { GET_ALL_USER_PRODUCTS, GET_TOTAL_PRICE } from '../../graphql/querys/products/getAllUserProducts'
import { DECREASE_PRODUCT } from '../../graphql/mutations/products/decreaseProduct'
import { jwtDecode } from 'jwt-decode'
import { useState } from 'react'


export const useAddProductToCart = (id) => {
    const email = jwtDecode(localStorage.getItem('USER_INFO')).email
    const [addLoading, setLoading] = useState(false)
    const [addProduct] = useMutation(ADD_PRODUCT_TO_CART)
    const getPrice = useQuery(GET_TOTAL_PRICE, {
        variables: { userId: email }
    })
    const getProducts = useQuery(GET_ALL_USER_PRODUCTS, {
        variables: { userId: email }
    })
    
    const addProductToCart  = async () => {
        setLoading(true)
        try {
            await addProduct({
                variables: {
                    userId: email,
                    addUserProductId: id
                }
            })
            const product = await getProducts.refetch()
            const price = await getPrice.refetch()
            if (!product.loading && !price.loading) setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    return { addProductToCart, addLoading }
}


export const useDecreaseProduct = (id) => {
    const email = jwtDecode(localStorage.getItem('USER_INFO')).email
    const [loading, setLoading] = useState(false)
    const [decreaseProduct] = useMutation(DECREASE_PRODUCT)
    const getPrice = useQuery(GET_TOTAL_PRICE, {
        variables: { userId: email }
    })
    const getProducts = useQuery(GET_ALL_USER_PRODUCTS, {
        variables: { userId: email }
    })

    const decreaseProductoOfCart  = async () => {
        setLoading(true)
        try {
            await decreaseProduct({
                variables: {
                    userId: email,
                    deleteUserProductId: id
                }
            })
            const product = await getProducts.refetch()
            
            const price = await getPrice.refetch()

            if (!product.loading && !price.loading) setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    return { decreaseProductoOfCart, loading }   
}