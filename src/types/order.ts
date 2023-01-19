export type OrderType = {
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