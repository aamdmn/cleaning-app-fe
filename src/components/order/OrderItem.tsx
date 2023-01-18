import useFetch from "../../hooks/useFetch"
import Customer from "./Customer"

type Order = {
    data: OrderData[]
    status: string
}

type OrderData = {
    id: number
    status: string
    date: string
    estimated_start: string
    estimated_end: string
    estimated_duration_h: string
    real_start: string
    real_end: string
    real_duration_h: string | number
    manual_price: string
    created_at: string
    updated_at: string
    user_id: number
}


export default function OrderItem() {
    const { data, error, loading } = useFetch('http://cleanup.skus.im/cms/api/orders') // todo: environment variable


    if (loading) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>

    const order = data as Order

    return (
        <>
            <div className="flex flex-col">
                <Customer />
                {order && order.data.map((order) => (
                    <div key={order.id} className="overflow-y-hidden w-full m-2 p-5 bg-white shadow-lg sm:rounded-lg">
                        <div className="border-t border-gray-200">
                            <h2 className="text-xl mt-2">Objednavka {order.id}</h2>
                            <div>
                                <div className="mt-1">
                                    <p className="text-slate-400 mb-2">Stav: {order.status}</p>
                                    <p className="text-slate-400">Datum: {order.date}</p>
                                    <p className="text-slate-400">Odhadovany zaciatok: {order.estimated_start}</p>
                                    <p className="text-slate-400">Odhadovany koniec: {order.estimated_end}</p>
                                    <p className="text-slate-400">Odhadovany koniec: {order.estimated_duration_h}h</p>
                                </div>
                                <div className="mt-3">
                                    <p className="text-slate-400">Realny start: {order.real_start}</p>
                                    <p className="text-slate-400">Realny koniec: {order.real_end}</p>
                                    {/* TODO: lepsi sintax */}
                                    <p className="text-slate-400">Realne trvanie: {(parseFloat(order.real_duration_h as any * 60 as any).toFixed(2))}s &#40;{order.real_duration_h}h&#41;</p>
                                    <p className="text-slate-400">Odhadovany koniec: {order.estimated_end}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
