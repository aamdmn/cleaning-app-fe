export type CustomerData = {
    id: number
    created_at: string
    updated_at: string
    user_id: number
    name: string
    hourly_rate: number
    monthly_budget: number | null
    current_credit: number
}