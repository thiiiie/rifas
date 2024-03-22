export interface StrapiPayment {
  id: number
  attributes: {
    email?: string
    name: string
    value: number
    document: string
    phone: string
    transaction_id: string
    createdAt: Date | string
    updatedAt: Date | string
    publishedAt: Date | string
    status: string
  }
}