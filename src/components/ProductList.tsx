import ProductCard from './ProductCard'
import type { Product } from '../types'

type Props = {
  products: Product[]
  onAddToCart: (id: string) => void
  onChangeQuantity: (id: string, delta: number) => void
}

export default function ProductList({ products, onAddToCart, onChangeQuantity }: Props) {
  if (!products.length) return <p>No products found.</p>

  return (
    <div className="product-list">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} onChangeQuantity={onChangeQuantity} />
      ))}
    </div>
  )
}
