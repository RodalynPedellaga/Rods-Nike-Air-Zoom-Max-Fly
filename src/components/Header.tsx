import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

type Props = {
  onSetFilter: (f: string) => void
  onSetSearch: (q: string) => void
  cartCount: number
}

export default function Header({ onSetFilter, onSetSearch, cartCount }: Props) {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastScroll = typeof window !== 'undefined' ? window.scrollY : 0
    function onScroll() {
      if (typeof window === 'undefined') return
      // keep hide-on-scroll to desktop only
      if (window.innerWidth <= 900) return
      const current = window.scrollY
      if (current > lastScroll && current > 80) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastScroll = current <= 0 ? 0 : current
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`site-header ${hidden ? 'hidden' : ''}`}>
      <div className="header-inner">
        <div className="brand">
          <Link to="/" className="logo-wrap" aria-label="Home">
            <div className="logo-surface">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect width="24" height="24" rx="6" fill="#071018" />
                <path d="M4 14c1.5-4 6-6 10-5" stroke="#d4af37" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="brand-text">Nike Air Zoom</span>
          </Link>
        </div>

        <nav className="main-nav" aria-label="Primary">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/add">Add</Link>
          <Link to="/cart">Cart</Link>
        </nav>

        <div className="header-actions">
          <div className="search-wrap">
            <input className="search-input" type="search" placeholder="Search" aria-label="Search products" onChange={(e) => onSetSearch(e.target.value)} />
            <button className="search-icon" aria-hidden>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21l-4.35-4.35" stroke="#BFC8D6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="11" cy="11" r="5" stroke="#BFC8D6" strokeWidth="1.6" />
              </svg>
            </button>
          </div>
          <Link to="/cart" className="cart-btn" aria-label="Open cart">
            <svg className="cart-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M6 6h15l-1.5 9h-11L6 6z" stroke="#071018" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round" fill="#FFF" />
            </svg>
            <span className="cart-count">{cartCount}</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
