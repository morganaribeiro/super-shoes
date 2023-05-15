import React from 'react';
import './toggleTabPane.css';

export default function ToggleTabPane({ content }) {
  return (
    <div className="toggle-tab__pane toggle-tab__pane--active">
      {content.map((card, index) => (
        <div key={index} className="card">
          <img src={card.imageUrl} alt={card.title} />
          <h3 className="title">{card.title}</h3>
          <p className="description">{card.description}</p>
        </div>
      ))}
    </div>
  );
}
