import type { Product } from '../types'

type Props = {
  products: Product[]
  onRemove: (id: string) => void
  onChangeQuantity: (id: string, delta: number) => void
}

export default function CartSummary({ products, onRemove, onChangeQuantity }: Props) {
  const itemsInCart = products.filter((p) => p.inCart)
  const total = itemsInCart.reduce((sum, p) => sum + p.price * p.quantity, 0)

  if (!itemsInCart.length)
    return (
      <aside className="cart-summary">
        <h3>Cart Summary</h3>
        <p>Your cart is empty.</p>
      </aside>
    )

  return (
    <aside className="cart-summary">
      <h3>Cart Summary</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {itemsInCart.map((it) => (
          <li key={it.id} style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
            <img src={it.image} alt={it.name} style={{ width: 56, height: 44, objectFit: 'cover', borderRadius: 6 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, color: '#fff' }}>{it.name}</div>
              <div style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>${it.price.toFixed(2)}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button onClick={() => onChangeQuantity(it.id, -1)} aria-label={`Decrease quantity for ${it.name}`} style={{ padding: '6px 8px' }}>-</button>
              <div style={{ minWidth: 28, textAlign: 'center', color: '#fff' }}>{it.quantity}</div>
              <button onClick={() => onChangeQuantity(it.id, +1)} aria-label={`Increase quantity for ${it.name}`} style={{ padding: '6px 8px' }}>+</button>
            </div>
            <div>
              <button onClick={() => onRemove(it.id)} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.04)', padding: '6px 8px', borderRadius: 8, color: 'var(--muted)' }}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <p style={{ marginTop: 12 }} className="cart-total">Total: ${total.toFixed(2)}</p>
    </aside>
  )
}
