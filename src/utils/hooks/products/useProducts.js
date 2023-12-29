import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getProductsRequest, getProducts, getProductsFailure } from "../../state/features/products/productSlice"
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
          if (products) dispatch(getProducts(products))
        } catch (error) {
          dispatch(getProductsFailure(error.message))
          }
        }
        fetchProduct()
    }, [data, dispatch])
}