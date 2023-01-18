import React from 'react'
import useFetch from '../../hooks/useFetch'


type CustomerData = {
    id: number
    created_at: string
    updated_at: string
    user_id: number
    name: string
    hourly_rate: number
    monthly_budget: number | null
    current_credit: number
}



function Customer() {
    const { data, loading, error } = useFetch('http://cleanup.skus.im/cms/api/profile') // todo: environment variable

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>

    const customer = data?.data[0] as CustomerData

    return (
        <>
            {customer && (
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg font-medium text-gray-900">Objednavky</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Zakaznik: {customer.name}</p>
                    <p className="mt-5 max-w-2xl text-sm text-gray-500">Hodinovka: {customer.hourly_rate}€</p>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Kredit: {customer.current_credit}€</p>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Budget: {customer.monthly_budget}€</p>
                </div>
            )}
        </>
    )
}

export default Customer
