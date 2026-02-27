import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Products = () => {
  const [ref, isVisible] = useScrollAnimation();

  const products = [
    {
      title: 'Система автоматизации взвешивания',
      description: 'Интегрированная система для точного взвешивания и дозирования сырья.',
      image: 'https://i.pinimg.com/originals/42/d3/5e/42d35e600fac24e2551a7c1d7298899f.png',
    },
    {
      title: 'ПО "Журнал взвешиваний"',
      description: 'Программное обеспечение для учета взвешиваний грузов.',
      image: 'https://производитель.рф/files/pubtext/СТАТ%20МЕТОДЫ.jpg',
      downloadLink: '#',
    },
  ];

  return (
    <section id="products" className="products fade-in-section" ref={ref} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(50px)' }}>
      <div className="container">
        <h2>Наши продукты</h2>
        <div className="products-grid">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="product-item"
              style={{ 
                transitionDelay: `${index * 150}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease ${index * 150}ms`
              }}
            >
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              {product.downloadLink && (
                <a href={product.downloadLink} className="btn" download style={{ marginTop: '15px' }}>
                  Скачать
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
