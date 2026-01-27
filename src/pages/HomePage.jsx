import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext.jsx';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [fruit, setFruit] = useState([]);
  const url = "http://localhost:3001";

  const { toggleFavorite, favorites, addToCompare } = useContext(GlobalContext);

  useEffect(() => {
    fetch(`${url}/fruits`)
      .then(res => res.json())
      .then(data => setFruit(data))
      .catch(err => console.error("Errore API:", err));
  }, []);

  return (
    <div className="container">
      <h1>I Nostri Frutti</h1>

      <div className="row">
        {fruit.map(f => {
          const isFav = favorites.some(fav => fav.id === f.id);

          return (
            <div className="card-fruit" key={f.id}>

              <div className="card-img">
                immagine del frutto
              </div>

              <div className="card-description">
                <h2>{f.title}</h2>
                <p>Categoria: {f.category}</p>
              </div>

              <div className="card-actions">
                <Link to={`/fruit/${f.id}`} className="btn-action">
                  Dettagli
                </Link>

                <button
                  className={`btn-action btn-fav ${isFav ? 'active' : ''}`}
                  onClick={() => toggleFavorite(f)}
                >
                  {isFav ? '❤️' : '🤍'}
                </button>

                <button
                  className="btn-action"
                  onClick={() => addToCompare(f)}
                >
                  ⚖️ Confronta
                </button>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;