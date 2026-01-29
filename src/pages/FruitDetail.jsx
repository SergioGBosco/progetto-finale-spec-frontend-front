import React from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
const FruitDetail = () => {

  const { id } = useParams();

  const { fruits, favorites, toggleFavorite } = useContext(GlobalContext);

  const fruit = fruits.find(f => f.id === parseInt(id));

  if (!fruit) {
    return (
      <div>
        <h2>non esiste nessuna task con questo id </h2>
        <Link to="/" className="btn-action">Torna alla Home</Link>
      </div>
    )
  }

  const isFav = favorites.some(fav => fav.id === fruit.id);

  console.log("Frutto completo:", fruit);
  return (
    <div className="detail-container">
      <h1 className="detail-title">{fruit.title}</h1>

      <div className="detail-card">
        <div className="detail-image">
          <img src={fruit.img} alt={fruit.title} />
        </div>

        <div className="detail-info">
          <h2 className="info-title">{fruit.title}</h2>
          <p className="info-category"><strong>Categoria:</strong> {fruit.category}</p>
          <p className="info-price"><strong>Prezzo:</strong> {fruit.pricePerKg}€/kg</p>
          <p className="info-color"><strong>Colore:</strong> {fruit.color}</p>
          <p className="info-calories"><strong>Calorie:</strong> {fruit.calories}</p>

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
      </div>
    </div>
  )
}

export default FruitDetail
