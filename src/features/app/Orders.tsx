import useFetch from "./_utils/useFetch"
import { OrderType } from "./orders/order/types/order"
import Customer from "./orders/customer/Customer"
import Order from "./orders/order/Order"
import "./Orders.css"

export default function Orders() {
    const { data, error, loading } = useFetch('http://cleanup.skus.im/cms/api/orders') // todo: environment variable


    if (loading) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>

    const order = data as OrderType

    return (
        <div className="container-home">
            <h1 className="title">Objednavky</h1>
            <Customer />
            {order && order?.data?.map((order) => (
                <Order order={order} />
            ))}
        </div>
    )
}
