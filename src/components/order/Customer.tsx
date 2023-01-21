import useFetch from '../../hooks/useFetch'
import { CustomerData } from '../../types/customer'
import '../../css/components/order/Customer.css'

function Customer() {
    const { data, loading, error } = useFetch('http://cleanup.skus.im/cms/api/profile') // todo: environment variable

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>

    const customer = data?.data[0] as CustomerData


    return (
        <>
            {customer && (
                <div className="customer">
                    <p className="text-zakaznik">Zakaznik: {customer.name}</p>
                    <p className="text-zakaznik mt-5">Hodinovka: {customer.hourly_rate}€</p>
                    <p className="text-zakaznik">Kredit: {customer.current_credit}€</p>
                    <p className="text-zakaznik">Budget: {customer.monthly_budget}€</p>
                </div>
            )}
        </>
    )
}

export default Customer
