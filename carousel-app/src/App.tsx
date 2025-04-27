import React from 'react';
import './App.css';
import Carousel from './components/Carousel';
import Dropdown from './components/Dropdown';

// Импортируем изображения
import slide1 from './assets/images/slide1.jpg';
import slide2 from './assets/images/slide2.jpg';
import slide3 from './assets/images/slide3.jpg';
import slide4 from './assets/images/slide4.jpg';

function App() {
  // Используем локальные изображения для карусели
  const images = [
    slide1,
    slide2,
    slide3,
    slide4
  ];

  // Пример опций для выпадающего меню
  const dropdownOptions = [
    {
      label: 'Показать первый слайд',
      value: '1',
      action: () => console.log('Переход к первому слайду'),
    },
    {
      label: 'Изменить интервал',
      value: '2',
      action: () => console.log('Изменение интервала'),
    },
    {
      label: 'Остановить карусель',
      value: '3',
      action: () => console.log('Остановка карусели'),
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Carousel с выпадающим меню</h1>
      </header>
      <main>
        <div className="carousel-section">
          <Carousel images={images} interval={5000} />
        </div>
        <div className="dropdown-section">
          <Dropdown options={dropdownOptions} placeholder="Выберите действие" />
        </div>
      </main>
    </div>
  );
}

export default App;
