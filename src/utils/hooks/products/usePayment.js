import { useEffect, useState } from 'react'
import { CREATE_PAYMENT } from '../../graphql/querys/products/createPayment'
import { useSelector } from 'react-redux'
import { useQuery, useLazyQuery } from '@apollo/client'
import { jwtDecode } from 'jwt-decode'
import { GET_TOTAL_PRICE } from '../../graphql/querys/products/getAllUserProducts'

export const usePayment = () => {
    const [loading, setLoading] = useState(false)
    const [paymentId, setPaymentId] = useState("")
    const products = useSelector(state => state.products)
    const email = jwtDecode(localStorage.getItem('USER_INFO')).email
    const [getPayment] = useLazyQuery(CREATE_PAYMENT)
    const result = useQuery(GET_TOTAL_PRICE, {
        variables: { userId: email },
    })

    useEffect(() => {
        if (!products.data) return;
        setLoading(true)
        const mapped = products.data.map(p => {
            return {
                id: p.id,
                name: p.name,
                price: p.price,
                amount: p.amount,
            }
        })
        const data = async () => {
            try {
                if (!mapped.length) {
                    console.error('Error creating payment: No items to pay');
                    setLoading(false);
                    return;
                }
        
                const result = await getPayment({
                    variables: {
                        items: mapped,
                    },
                });
        
                // Check if result.data is defined before accessing properties
                if (result.data && result.data.createPayment) {
                    setPaymentId(result.data.createPayment);
                } else {
                    console.error('Error creating payment: Unexpected data structure', result);
                }
        
                setLoading(false);
            } catch (error) {
                // Handle errors, log, or set appropriate state
                console.error('Error creating payment:', error);
                setLoading(false);
            }
        };
        
        
        data()
    },[products.data, getPayment, result.data])

    return { loading, paymentId, result, products: products.data }
}