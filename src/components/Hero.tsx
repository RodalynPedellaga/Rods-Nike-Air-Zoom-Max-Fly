import { Link } from 'react-router-dom'
import './Hero.css'

type Props = {
  onCTAClick?: () => void
}

export default function Hero(_: Props) {
  return (
    <main className="landing-hero">
      <section className="hero-visual">
        <div className="hero-overlay">
          <h1 className="hero-title">Nike Air Zoom Maxfly</h1>
          <p className="hero-sub">Engineered for sprint excellence — premium materials meet track-proven performance.</p>
          <div className="hero-actions">
            <Link to="/products" className="primary">Shop Collection</Link>
            <Link to="/add" className="muted">Add product</Link>
          </div>
        </div>
      </section>

      <section className="hero-features">
        <div className="feature">
          <h4>Lightweight</h4>
          <p>Featherweight construction for explosive acceleration.</p>
        </div>
        <div className="feature">
          <h4>Responsive Cushioning</h4>
          <p>Zoom technology tuned for track forces.</p>
        </div>
        <div className="feature">
          <h4>Premium Finish</h4>
          <p>Luxurious detailing and durable materials.</p>
        </div>
      </section>
    </main>
  )
}
