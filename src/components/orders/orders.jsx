import Style from './orders.module.css'
import { useQuery } from '@apollo/client'
import { GET_ALL_RECEIPTS } from '../../utils/graphql/querys/products/getAllReceipts'
import { jwtDecode } from 'jwt-decode'
import { Link } from 'react-router-dom'


export default function Orders() {
    const { data, loading, error } = useQuery(GET_ALL_RECEIPTS, {
        variables: { getAllReceiptsId: jwtDecode(localStorage.getItem('USER_INFO')).email } 
    })

    if (!data) return <p>No tienes pedidos</p>
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    return (
        <div className={Style.card}>
            {data.getAllReceipts.map(receipt => (
                <Link key={receipt.id} to={`/${receipt.id}`}>
                 <div className={Style.receipt}>
                    <div className={Style.receipt_info}>
                    <img src={receipt.image} alt={receipt.name} />
                    <h2>{receipt.name}</h2>
                    </div>
                    <h2>${receipt.price.toLocaleString('es-ES', { maximumFractionDigits: 0 })}</h2>
                  </div>
                </Link>
            ))}
        </div>
    )
}