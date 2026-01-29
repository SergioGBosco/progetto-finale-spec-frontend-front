import React from 'react'

const ModalCompare = ({ isOpen, content, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>

        <h2>Confronto Prodotti</h2>

        <div className="compare-row">
          {content.map((fruit) => (
            <div key={fruit.id}>
              <div className='img-card-compare'>
                <img src={fruit.img} alt={fruit.title} />
              </div>
              <div className="info-card-compare">
                <h3>{fruit.title}</h3>
                <span className="fruit-category">{fruit.category}</span>
                <p><strong>Prezzo:</strong> {fruit.pricePerKg}€/kg</p>
                <p><strong>Calorie:</strong> {fruit.calories}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="modal-action">
          <button className="compare-btn-close" onClick={onClose}>Chiudi Confronto</button>
        </div>
      </div>
    </div>
  );
};


export default ModalCompare
