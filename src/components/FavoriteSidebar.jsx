import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Link } from 'react-router-dom'

const FavoriteSidebar = ({ isOpen, onClose }) => {
  const { favorites, toggleFavorite } = useContext(GlobalContext)

  return (
    <>
      <div className={`fav-sidebar ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen} role="dialog">
        <div className="fav-sidebar-header">
          <h3>Preferiti</h3>
          <button className="fav-close" onClick={onClose} aria-label="Chiudi">×</button>
        </div>

        <div className="fav-list">
          {favorites.length === 0 && <p className="muted">Nessun preferito</p>}

          {favorites.map((f) => (
            <div className="fav-item" key={f.id}>
              <div className="fav-thumb">
                {f.img ? <img src={f.img} alt={f.title} /> : <div className="fav-noimg">🍎</div>}
              </div>
              <div className="fav-meta">
                <strong>{f.title}</strong>
                <div className="fav-meta-actions">
                  <button className="btn-action" onClick={() => toggleFavorite(f)}>Rimuovi</button>
                  <Link to={`/fruit/${f.id}`} className="btn-action" onClick={onClose}>Dettagli</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOpen && <div className="fav-overlay" onClick={onClose} />}
    </>
  )
}

export default FavoriteSidebar
