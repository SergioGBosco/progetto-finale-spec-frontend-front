import React, { useEffect, useState, useContext, useCallback, useMemo } from 'react';
import { GlobalContext } from '../context/GlobalContext.jsx';
import { Link } from 'react-router-dom';

function debounce(callback, delay) {
  let timer;
  return (value) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(value);
    }, delay)
  }
}


const HomePage = () => {

  const [inputValue, setInputValue] = useState("");
  const [searchFruit, setSearchFruit] = useState("");

  const [categoryFruit, setCategoryFruit] = useState("")

  const { fruits, favorites, toggleFavorite, addToCompare, compareList } = useContext(GlobalContext);

  const debounceSearch = useCallback(debounce(setSearchFruit, 500), [])


  const handleSearchChange = (e) => {
    const val = e.target.value;
    setInputValue(val);
    debounceSearch(val);
  };

  console.log(searchFruit)


  const filteredFruits = useMemo(() => {
    return fruits.filter(f => {
      const Search = f.title.toLowerCase().includes(searchFruit.toLowerCase());
      const Category = categoryFruit === "" || f.category === categoryFruit;
      return Search && Category;
    })
  }, [searchFruit, categoryFruit, fruits]);

  const categories = [...new Set(fruits.map(f => f.category))];

  return (
    <div className="container">
      <h1>I Nostri Frutti</h1>



      <div className="filters-container">
        <input
          type="text"
          placeholder="Cerca un frutto..."
          className="search-input"
          value={inputValue}
          onChange={handleSearchChange}
        />

        <select
          value={categoryFruit}
          onChange={(e) => setCategoryFruit(e.target.value)}
        >
          <option value="">Tutte le categorie</option>

          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="row">
        {filteredFruits.map(f => {
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