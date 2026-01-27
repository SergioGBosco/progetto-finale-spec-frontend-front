import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const HomePage = () => {
  //UseState per gestire i frutti derivati da chiamata API
  const [fruit, setFruit] = useState([])

  //URL BACKEND
  const url = "http://localhost:3001"

  // Chiamata API per ottenere i frutti 
  useEffect(() => {
    fetch(`${url}/fruits`)
      .then(res => res.json())
      .then(data => setFruit(data))
      .catch(err => console.error(err))
  }, []);

  console.log(fruit)
  return (
    <div>
      <h1>Home PAge del mio Sito Frutti</h1>
      <div className="container">
        <div className="row">
          {fruit.map(f =>
            <div className="col-33" key={f.id}>
              <div className='Card-fruit' >
                <div className='Card-img'>
                  Questo sarà lo spazio dedicato all'immagine dei frutti
                </div>
                <div className='Card-description'>
                  <h2>{f.title}</h2>
                  <p>{f.category}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HomePage
