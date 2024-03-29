import { useEffect, useState } from 'react'
import { CREATE_PAYMENT } from '../../graphql/querys/products/createPayment'
import { GET_PAYMENT_CART } from '../../graphql/querys/products/getPayment'
import { useQuery, useLazyQuery } from '@apollo/client'
import { jwtDecode } from 'jwt-decode'
import { GET_TOTAL_PRICE, GET_ALL_USER_PRODUCTS } from '../../graphql/querys/products/getAllUserProducts'

export const usePayment = () => {
    const [loading, setLoading] = useState(false)
    const [paymentId, setPaymentId] = useState("")
    const email = jwtDecode(localStorage.getItem('USER_INFO')).email
    const [getPayment] = useLazyQuery(CREATE_PAYMENT)
    const [getPaymentCart] = useLazyQuery(GET_PAYMENT_CART)
    const products = useQuery(GET_ALL_USER_PRODUCTS, {
        variables: { userId: email },
    })

   
    const result = useQuery(GET_TOTAL_PRICE, {
        variables: { userId: email },
    })

    useEffect(() => {
        if (products.loading) return;
        const userProducts = products.data.getAllUserProducts
        const data = async () => {
            try {
                if (userProducts.length === 0) return;
                setLoading(true)
                const mapped = userProducts.map(product => {
                    return {
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        amount: product.amount,
                    }
                })
                
                const paymentResult = await getPayment({
                    variables: { items: mapped }, 
                })
                
                setPaymentId(paymentResult.data.createPayment)
                setLoading(false)
            } catch (error) {
                console.error('Error creating payment:', error);
                setLoading(false);
            }
        };
        
        
        
        data()
    },[products.data, getPayment, products.loading])

    const pay = async () => {
        const res = await getPaymentCart({
            variables: { getPaymentId: email, price: parseInt(result.data.getTotalPrice)},
        })
        console.log(res);
    }

    return { loading, paymentId, result, products: products.data, pay }
}
