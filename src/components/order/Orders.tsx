import Customer from "./Customer"
import Order from "./Order"

export default function Orders() {

    return (
        <div className="flex flex-col">
            <Customer />
            <Order />
        </div>
    )
}
