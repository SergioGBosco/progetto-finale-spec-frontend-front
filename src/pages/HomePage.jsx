import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext.jsx';
import { Link } from 'react-router-dom';

const HomePage = () => {

  const { fruits, favorites, toggleFavorite, addToCompare, compareList } = useContext(GlobalContext);

  return (
    <div className="container">
      <h1>I Nostri Frutti</h1>

      <div className="row">
        {fruits.map(f => {
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