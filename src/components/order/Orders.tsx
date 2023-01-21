import useFetch from "../../hooks/useFetch"
import { OrderType } from "../../types/order"
import Customer from "./Customer"
import Order from "./Order"
import "./../../css/components/order/Orders.css"

export default function Orders() {
    const { data, error, loading } = useFetch('http://cleanup.skus.im/cms/api/orders') // todo: environment variable


    if (loading) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>

    const order = data as OrderType

    return (
        <div>
            <h1 className="title">Objednavky</h1>
            <Customer />
            {order && order?.data?.map((order) => (
                <Order order={order} />
            ))}
        </div>
    )
}
