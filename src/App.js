import { useEffect, useRef, useState } from 'react';
import './App.css';
import ToggleTab from './components/toggleTab/toggleTab';

function App() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const tabs = [
    {
      id: 1,
      label: 'Tab 1',
      content: [
        {
          imageUrl: 'https://via.placeholder.com/150x150',
          title: 'Card 1',
          description: 'Descrição do Card 1',
        },
        {
          imageUrl: 'https://via.placeholder.com/150x150',
          title: 'Card 2',
          description: 'Descrição do Card 2',
        },
        {
          imageUrl: 'https://via.placeholder.com/150x150',
          title: 'Card 3',
          description: 'Descrição do Card 3',
        },
      ],
    },
    {
      id: 2,
      label: 'Tab 2',
      content: [
        {
          imageUrl: 'https://via.placeholder.com/150x150',
          title: 'Card 4',
          description: 'Descrição do Card 4',
        },
        {
          imageUrl: 'https://via.placeholder.com/150x150',
          title: 'Card 5',
          description: 'Descrição do Card 5',
        },
        {
          imageUrl: 'https://via.placeholder.com/150x150',
          title: 'Card 6',
          description: 'Descrição do Card 6',
        },
      ],
    },
    {
      id: 3,
      label: 'Tab 3',
      content: [
        {
          imageUrl: 'https://via.placeholder.com/150x150',
          title: 'Card 7',
          description: 'Descrição do Card 7',
        },
        {
          imageUrl: 'https://via.placeholder.com/150x150',
          title: 'Card 8',
          description: 'Descrição do Card 8',
        },
        {
          imageUrl: 'https://via.placeholder.com/150x150',
          title: 'Card 9',
          description: 'Descrição do Card 9',
        },
      ],
    },
  ];

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
    <>
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
      <div className="toggle-tab-container">
        <ToggleTab tabs={tabs} />
      </div>
    </>
  );
}

export default App;