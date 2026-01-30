import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const FavoriteToggle = ({ isOpen, setIsOpen }) => {
  const { favorites } = useContext(GlobalContext)
  const count = Array.isArray(favorites) ? favorites.length : 0

  return (
    <button
      className="fav-toggle"
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Apri preferiti"
      title="Preferiti"
    >
      <span className="fav-toggle-icon">❤️</span>
      {count > 0 && <span className="fav-count">{count}</span>}
    </button>
  )
}

export default FavoriteToggle
