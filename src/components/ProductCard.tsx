import React from "react";
import { Link } from 'react-router-dom'
import "./ProductCard.css";
import type { Product } from '../types'

interface ProductCardProps {
  product: Product
  onAddToCart?: (id: string) => void
  onChangeQuantity?: (id: string, delta: number) => void
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onChangeQuantity }) => {
  const { id, name, category, price, quantity, image, inCart } = product
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-img" />

      <h3 className="product-title">{name}</h3>
      <p className="product-category">{category}</p>

      <p className="product-price">${price.toFixed(2)}</p>

      <div className="product-info">
        <p>Quantity: {quantity}</p>
        <p>Subtotal: ${(price * quantity).toFixed(2)}</p>
      </div>

      {quantity <= 2 && <p className="low-stock">Low Stock</p>}

      <div className="product-actions">
        <button className="qty-btn" onClick={() => onChangeQuantity && onChangeQuantity(id, -1)}>-</button>
        <button className="qty-btn" onClick={() => onChangeQuantity && onChangeQuantity(id, +1)}>+</button>

        <button className="add-btn" onClick={() => onAddToCart && onAddToCart(id)}>
          Add to Cart{inCart ? ` (${quantity})` : ''}
        </button>

        <Link to={`/product/${id}`} className="view-btn">View</Link>
      </div>
    </div>
  );
};

export default ProductCard;
