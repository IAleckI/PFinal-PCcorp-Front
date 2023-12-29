import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getProductsRequest, getProducts, getProductsFailure, setFiltered } from "../../state/features/products/productSlice"
import { GET_ALL_PRODUCTS } from "../../graphql/querys/products/getAllProducts"
import { useQuery } from "@apollo/client"

export const useProducts = () => {
    const { data } = useQuery(GET_ALL_PRODUCTS)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchProduct = async () => {
        dispatch(getProductsRequest())
        try {
          const products = await data?.getAllProducts
          if (products) {
            dispatch(getProducts(products))
            dispatch(setFiltered(products))}
        } catch (error) {
          dispatch(getProductsFailure(error.message))
          }
        }
        fetchProduct()
    }, [data, dispatch])
}