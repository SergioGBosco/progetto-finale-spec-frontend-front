import React from 'react'
import { useState, useEffect } from 'react'
const useFruit = () => {

  // Funzione per caricare favoriti da localStorage
  const loadFavoritesFromStorage = () => {
    try {
      const saved = localStorage.getItem('favorites');
      if (saved) {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed) ? parsed : [];
      }
    } catch (err) {
      console.error('Errore caricamento preferiti da localStorage:', err);
    }
    return [];
  };

  const [fruits, setFruit] = useState([]);
  const [favorites, setFavorites] = useState(loadFavoritesFromStorage());
  const [compareList, setCompareList] = useState([]);


  const url = "http://localhost:3001";

  useEffect(() => {
    fetch(`${url}/fruits`)
      .then(res => res.json())
      .then(data => setFruit(data))
      .catch(err => console.error("Errore API:", err));
  }, []);

  // Salva i preferiti su localStorage , in versione stringa,  ogni volta che cambiano
  useEffect(() => {
    try {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (err) {
      console.error('Errore salvataggio preferiti su localStorage:', err);
    }
  }, [favorites]);

  const toggleFavorite = (fruit) => {
    setFavorites((prev) =>
      prev.find((f) => f.id === fruit.id)
        ? prev.filter((f) => f.id !== fruit.id)
        : [...prev, fruit]
    );
  };

  const addToCompare = (fruit) => {
    if (compareList.length < 2 && !compareList.find((f) => f.id === fruit.id)) {
      setCompareList([...compareList, fruit]);
    } else if (compareList.find((f) => f.id === fruit.id)) {
      setCompareList(compareList.filter(f => f.id !== fruit.id));
    }
  };



  function debounce(callback, delay) {
    let timer;
    return (value) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback(value);
      }, delay)
    }
  }

  return { fruits, favorites, toggleFavorite, addToCompare, compareList, debounce, setCompareList }
}

export default useFruit
