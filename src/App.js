import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/static/shoes.json')
      .then((response) => response.json())
      .then(setData);
  }, []);

  useEffect(() => {
    console.log(currentIndex); // 0, 1, 2, 3, 4 
    console.log(data.length); // 5 itens
  }, [currentIndex, data.length]);

  const handleLeftClick = (e) => {
    e.preventDefault();
    if (currentIndex > 0) {
      setCurrentIndex(prevCurrentIndex => prevCurrentIndex - 1);
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    if (currentIndex < data.length - 1) {
      setCurrentIndex(prevCurrentIndex => prevCurrentIndex + 1);
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
  };

  if (!data || !data.length) return null;

  return (
    <div className="container">
      <div className="logo">
        <img src="/static/images/super-shoes.png" alt="Super Shoes Logo" />
      </div>
      <div className="carousel" ref={carousel}>
        {data.map((item) => {
          const { id, name, price, oldPrice, image } = item;
          return (
            <div className="item" key={id}>
              <div className="image">
                <img src={image} alt={name} />
              </div>
              <div className="info">
                <span className="name">{name}</span>
                <span className="oldPrice">U$ {oldPrice}</span>
                <span className="price">U$ {price}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="buttons">
        <button onClick={handleLeftClick} className={`arrow ${currentIndex === 0 ? "disabled" : ""}`} disabled={currentIndex === 0}>
          <div className="arrowLeft"></div>
        </button>
        <button onClick={handleRightClick} className={`arrow ${currentIndex === data.length - 1 ? "disabled" : ""}`} disabled={currentIndex === data.length - 1}>
          <div className="arrowRight"></div>
        </button>
      </div>
    </div>
  );
}

export default App;