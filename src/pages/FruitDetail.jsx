import React from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
const FruitDetail = () => {

  const { id } = useParams();

  const { fruits, favorites, toggleFavorite } = useContext(GlobalContext);

  const fruit = fruits.find(f => f.id === parseInt(id));

  const isFav = favorites.some(fav => fav.id === fruit.id);

  if (!fruit) {
    return (
      <div>
        <h2>non esiste nessuna task con questo id </h2>
        <Link to="/" className="btn-action">Torna alla Home</Link>
      </div>
    )
  }
  console.log(fruit)
  return (
    <div>
      <h1>Pagina di Dettaglio del prodotto</h1>
      <p>{fruit.title}</p>
      <p>{fruit.category}</p>
      <p><strong>Prezzo:</strong> {fruit.pricePerKg}€/kg</p>
      <p><strong>Colore:</strong> {fruit.color}</p>
      <div className="card-actions">
        <button
          className={`btn-action btn-fav ${isFav ? 'active' : ''}`}
          onClick={() => toggleFavorite(fruit)}
        >
          {isFav ? '❤️' : '🤍'}
        </button>

        <Link to="/" className="btn-action">
          Torna alla Home
        </Link>
      </div>
    </div>
  )
}

export default FruitDetail
