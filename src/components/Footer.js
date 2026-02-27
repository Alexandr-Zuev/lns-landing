import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Footer = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <footer className="footer fade-in-section" ref={ref} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(50px)' }}>
      <div className="container">
        <p>&copy; 2025 Компания LNS. Все права защищены.</p>
        <p>Контакты: <a href="mailto:info@lns.ru">info@lns.ru</a> | +7 (123) 456-78-90</p>
        <p style={{ marginTop: '15px', fontSize: '0.9em', opacity: 0.8 }}>Developed by Zuev A.D.</p>
      </div>
    </footer>
  );
};

export default Footer;
