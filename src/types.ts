export interface Product {
  id: string
  image: string
  name: string
  category: string
  description: string
  specs?: string
  rating?: number
  price: number
  quantity: number
  inCart?: boolean
  favorite?: boolean
}
