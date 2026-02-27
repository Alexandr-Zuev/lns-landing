import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="about" className="about fade-in-section" ref={ref} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(50px)' }}>
      <div className="container">
        <h2>О компании</h2>
        <p>Компания LNS занимается разработкой и внедрением программно-аппаратных комплексов для автоматизации процессов взвешивания и дозирования. Мы стремимся обеспечить предприятия высокоэффективными инструментами управления процессами взвешивания и дозирования, повышая производительность и точность операций.</p>
      </div>
    </section>
  );
};

export default About;
