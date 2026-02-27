import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Prices = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="prices" className="prices fade-in-section" ref={ref} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(50px)' }}>
      <div className="container">
        <h2>Тарифы</h2>
        <div className="price-cards">
          <div 
            className="price-card"
            style={{ 
              transitionDelay: '0ms',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s ease 0ms'
            }}
          >
            <h3>Базовый</h3>
            <p className="price">от 50 000 ₽</p>
            <ul>
              <li>Автоматизация процессов</li>
              <li>Контроль качества</li>
              <li>Поддержка</li>
            </ul>
            <button>Заказать</button>
          </div>
          <div 
            className="price-card popular"
            style={{ 
              transitionDelay: '100ms',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s ease 100ms'
            }}
          >
            <h3>Стандартный</h3>
            <p className="price">от 100 000 ₽</p>
            <ul>
              <li>Все базовые услуги</li>
              <li>Индивидуальная разработка</li>
              <li>Интеграция с оборудованием</li>
            </ul>
            <button>Заказать</button>
          </div>
          <div 
            className="price-card"
            style={{ 
              transitionDelay: '200ms',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s ease 200ms'
            }}
          >
            <h3>Премиум</h3>
            <p className="price">от 200 000 ₽</p>
            <ul>
              <li>Все услуги</li>
              <li>Простота установки</li>
              <li>Полная поддержка</li>
            </ul>
            <button>Заказать</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
