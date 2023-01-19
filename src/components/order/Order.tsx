import useFetch from '../../hooks/useFetch'
import { OrderType } from '../../types/order'


function Order() {
    const { data, error, loading } = useFetch('http://cleanup.skus.im/cms/api/orders') // todo: environment variable


    if (loading) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>

    const order = data as OrderType


    return (
        <>
            {order && order.data.map((order) => (
                <div key={order.id} className="overflow-y-hidden w-full m-2 p-5 bg-white shadow-lg sm:rounded-lg">
                    <div className="border-t border-gray-200">
                        <h2 className="text-xl mt-2">Objednavka {order.id}</h2>
                        <div>
                            <div className="mt-1">
                                <p className="text-order-data mb-2">Stav: {order.status}</p>
                                <p className="text-order-data">Datum: {order.date}</p>
                                <p className="text-order-data">Odhadovany zaciatok: {order.estimated_start}</p>
                                <p className="text-order-data">Odhadovany koniec: {order.estimated_end}</p>
                                <p className="text-order-data">Odhadovany koniec: {order.estimated_duration_h}h</p>
                            </div>
                            <div className="mt-3">
                                <p className="text-order-data">Realny start: {order.real_start}</p>
                                <p className="text-order-data">Realny koniec: {order.real_end}</p>
                                {/* TODO: lepsi sintax */}
                                <p className="text-order-data">Realne trvanie: {(parseFloat(order.real_duration_h as any * 60 as any).toFixed(2))} &#40;{order.real_duration_h}h&#41;</p>
                                <p className="text-order-data">Odhadovany koniec: {order.estimated_end}</p>
                            </div>

                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Order
