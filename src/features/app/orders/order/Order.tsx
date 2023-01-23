import { OrderType } from './types/order'
import './Order.css'

function Order({ order }: OrderType) {

    console.log(order)

    return (
        <div key={order?.id} className="order-item">
            <div className="border-t border-gray-200">
                <h2 className="order-name">Objednavka {order?.id}</h2>
                <div>
                    <div className="mt-1">
                        <p className="text-order-data mb-2">Stav: {order?.status}</p>
                        <p className="text-order-data">Datum: {order?.date}</p>
                        <p className="text-order-data">Odhadovany zaciatok: {order?.estimated_start}</p>
                        <p className="text-order-data">Odhadovany koniec: {order?.estimated_end}</p>
                        <p className="text-order-data">Odhadovany koniec: {order?.estimated_duration_h}h</p>
                    </div>
                    <div className="mt-3">
                        <p className="text-order-data">Realny start: {order?.real_start}</p>
                        <p className="text-order-data">Realny koniec: {order?.real_end}</p>
                        {/* TODO: lepsi sintax */}
                        <p className="text-order-data">Realne trvanie: {(parseFloat(order?.real_duration_h as any * 60 as any).toFixed(2))} &#40;{order?.real_duration_h}h&#41;</p>
                        <p className="text-order-data">Odhadovany koniec: {order?.estimated_end}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Order
