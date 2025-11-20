import { Link } from 'react-router-dom'
import { useState } from 'react'
import type { Product } from '../types'

type Props = {
  product: Product
  relatedProducts?: Product[]
  onAddToCart?: (id: string) => void
  onToggleFavorite?: (id: string) => void
  onChangeQuantity?: (id: string, delta: number) => void
}

export default function ProductDetail({ product, relatedProducts = [], onAddToCart, onToggleFavorite, onChangeQuantity }: Props) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState<string>('9')

  const sizes = ['6', '7', '8', '9', '10', '11', '12']

  return (
    <div className="product-detail page">
      <Link to="/" className="back-btn">← Back to products</Link>

      <div className="detail-grid">
        <div className="images">
          <div className="main-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="thumbs">
            <button className={selectedImage === 0 ? 'active' : ''} onClick={() => setSelectedImage(0)}>
              <img src={product.image} alt="thumb" />
            </button>
          </div>
        </div>

        <div className="info">
          <h2 className="title">{product.name}</h2>
          <p className="category">{product.category}</p>
          <div className="meta">
            <div className="rating">Rating: {product.rating ?? 'N/A'}</div>
            <div className="price">${product.price.toFixed(2)}</div>
          </div>

          <p className="description">{product.description}</p>

          <div className="selectors">
            <label>
              Size
              <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                {sizes.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>

            <label className="available">Available: {product.quantity}</label>
          </div>

          <div className="actions">
            <button
              className="primary"
              onClick={() => onAddToCart && onAddToCart(product.id)}
            >
              Add to Cart
            </button>
            <button
              className="muted"
              onClick={() => onToggleFavorite && onToggleFavorite(product.id)}
            >
              {product.favorite ? '♥ Favorited' : '♡ Add to favorites'}
            </button>
          </div>

          <div className="quantity-control">
            <button onClick={() => onChangeQuantity && onChangeQuantity(product.id, -1)}>-</button>
            <span>{product.quantity}</span>
            <button onClick={() => onChangeQuantity && onChangeQuantity(product.id, 1)}>+</button>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <section className="related">
          <h3>Related products</h3>
          <div className="related-list">
            {relatedProducts.map((r) => (
              <Link to={`/product/${r.id}`} key={r.id} className="related-item">
                <img src={r.image} alt={r.name} />
                <div className="rmeta">
                  <div className="rname">{r.name}</div>
                  <div className="rprice">${r.price.toFixed(2)}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
