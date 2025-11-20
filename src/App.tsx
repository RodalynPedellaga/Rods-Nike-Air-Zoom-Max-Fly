import { useMemo, useState } from 'react'
import { Routes, Route, useParams, Link } from 'react-router-dom'
import './App.css'
import { initialProducts } from './data/products'
import type { Product } from './types'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'
import AddProductForm from './components/AddProductForm'
import CartSummary from './components/CartSummary'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
// CommonElements removed — not present in workspace

function App() {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')
  // Product detail route is defined inside App so it can access products and handlers directly.

  const categories = useMemo(() => {
    const cats = Array.from(new Set(products.map((p) => p.category)))
    return ['All', ...cats]
  }, [products])

  const filtered = products
    .filter((p) => filter === 'All' || filter === 'Men' || filter === 'Women' || filter === 'Sale' ? true : p.category === filter)
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))

  // Add to cart now increments quantity and marks item in cart.
  // This allows adding multiple times (unlimited) — quantity will increase on each add.
  const handleAddToCart = (id: string) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, inCart: true, quantity: (p.quantity || 0) + 1 } : p,
      ),
    )
  }

  const handleChangeQuantity = (id: string, delta: number) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: Math.max(0, p.quantity + delta) } : p)),
    )
  }

  const handleRemoveFromCart = (id: string) => {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, inCart: false, quantity: 1 } : p)))
  }

  // route-based detail view will be used instead of local selected state

  const handleAddProduct = (product: Product) => setProducts((p) => [product, ...p])

  const handleToggleFavorite = (id: string) => {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, favorite: !p.favorite } : p)))
  }

  const overallTotal = products.reduce((sum, p) => sum + p.price * p.quantity, 0)
  const cartCount = products.filter((p) => p.inCart).length

  return (
    <div className="app-root">
      <Header onSetFilter={setFilter} onSetSearch={setSearch} cartCount={cartCount} />
      <header className="header">
        <h1>Nike Air Zoom Maxfly — Product Management</h1>
        <p className="tag">Luxury sprint spikes for 100–400m events</p>
      </header>

      <main className="main">
        <section className="left">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route
              path="/products"
              element={
                <>
                  <div className="controls-row">
                    <label>Filter:</label>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                      {categories.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                    <div className="total">Overall Total: ${overallTotal.toFixed(2)}</div>
                  </div>
                  <ProductList products={filtered} onAddToCart={handleAddToCart} onChangeQuantity={handleChangeQuantity} />
                </>
              }
            />

            {/* removed separate /hero landing — Home is the full-screen landing at / */}

            <Route
              path="/add"
              element={<AddProductForm onAdd={handleAddProduct} />}
            />

            <Route
              path="/cart"
              element={<CartSummary products={products} onRemove={handleRemoveFromCart} onChangeQuantity={handleChangeQuantity} />}
            />

            <Route
              path="/product/:id"
              element={
                <ProductDetailRouteWrapper
                  products={products}
                  onAddToCart={handleAddToCart}
                  onToggleFavorite={handleToggleFavorite}
                  onChangeQuantity={handleChangeQuantity}
                />
              }
            />
          </Routes>

          <Footer />

          <aside className="right">
            {/* right column intentionally left for small widgets */}
          </aside>
        </section>
      </main>
    </div>
  )
}

export default App

function ProductDetailRouteWrapper({
  products,
  onAddToCart,
  onToggleFavorite,
  onChangeQuantity,
}: {
  products: Product[]
  onAddToCart: (id: string) => void
  onToggleFavorite: (id: string) => void
  onChangeQuantity: (id: string, delta: number) => void
}) {
  const { id } = useParams()
  const product = id ? products.find((p) => p.id === id) : undefined
  if (!product)
    return (
      <div style={{ color: 'var(--muted)' }}>
        <p>Product not found.</p>
        <Link to="/">Back to list</Link>
      </div>
    )

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)
  return (
    <ProductDetail product={product} relatedProducts={related} onAddToCart={onAddToCart} onToggleFavorite={onToggleFavorite} onChangeQuantity={onChangeQuantity} />
  )
}
