import React, { useEffect, useState, useContext, useCallback, useMemo } from 'react';
import { GlobalContext } from '../context/GlobalContext.jsx';
import { Link } from 'react-router-dom';


const HomePage = () => {

  const [inputValue, setInputValue] = useState("");
  const [searchFruit, setSearchFruit] = useState("");
  const [categoryFruit, setCategoryFruit] = useState("")
  const [sortBy, setSortBy] = useState('title');
  const [sortOrder, setSortOrder] = useState(1);

  const { fruits, favorites, toggleFavorite, addToCompare, compareList, debounce } = useContext(GlobalContext);

  const debounceSearch = useCallback(debounce(setSearchFruit, 500), [])

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setInputValue(val);
    debounceSearch(val);
  };

  const filteredFruits = useMemo(() => {
    return [...fruits]
      .filter(f => {
        const Search = f.title.toLowerCase().includes(searchFruit.toLowerCase());
        const Category = categoryFruit === "" || f.category === categoryFruit;
        return Search && Category;
      })
      .sort((a, b) => {
        return a[sortBy].localeCompare(b[sortBy]) * sortOrder;
      });
  }, [searchFruit, categoryFruit, fruits, sortBy, sortOrder]);

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
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="title">Ordina per Nome</option>
          <option value="category">Ordina per Categoria</option>
        </select>

        <button
          className="btn-action"
          onClick={() => setSortOrder(sortOrder === 1 ? -1 : 1)}
        >
          {sortOrder === 1 ? "↑ A-Z" : "↓ Z-A"}
        </button>
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
                  Confronta
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