import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div className="home-page-full">
      <div className="home-inner">
        <div className="home-copy">
          <h1 className="home-title">Nike Air Zoom Maxfly</h1>
          <p className="home-sub">Engineered for sprint excellence — premium materials meet track-proven performance.</p>

          <div className="home-ctas">
            <Link to="/products" className="btn primary">Shop Collection</Link>
            <Link to="/add" className="btn outline">Add product</Link>
          </div>
        </div>

        <div className="home-media">
          <img src="/image.jpg" alt="Nike Air Zoom Maxfly" />
        </div>
      </div>
    </div>
  )
}
