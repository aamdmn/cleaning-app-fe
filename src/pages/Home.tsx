import React from 'react'
import OrderItem from '../components/order/OrderItem'

function Home() {
    return (
        <>
            <div className='w-full flex justify-center'>
                <h1 className='text-3xl mt-4'>Dashboard</h1>
            </div>
            <OrderItem />
        </>
    )
}

export default Home
