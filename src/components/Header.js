import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <nav style={{ background: scrolled ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.8)' }}>
        <ul>
          <li><a href="#about">О компании</a></li>
          <li><a href="#services">Услуги</a></li>
          <li><a href="#products">Продукты</a></li>
          <li><a href="#process">Процесс</a></li>
          <li><a href="#contact">Контакты</a></li>
        </ul>
      </nav>
      <div className="container">
        <h1 className="float">Компания LNS</h1>
        <p>Разработка и внедрение программно-аппаратных комплексов для автоматизации процессов взвешивания и дозирования</p>
        <a href="#about" className="btn">Узнать больше</a>
        <div className="contact-info">
          <span>+7 (123) 456-78-90</span>
          <span>info@lns.ru</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
