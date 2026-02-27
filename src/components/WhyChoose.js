import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WhyChoose = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const reasons = [
    {
      title: 'Опыт и экспертиза',
      description: 'Более 10 лет опыта в разработке автоматизированных систем.',
    },
    {
      title: 'Инновационные решения',
      description: 'Используем передовые технологии для достижения лучших результатов.',
    },
    {
      title: 'Индивидуальный подход',
      description: 'Адаптируем решения под уникальные потребности каждого клиента.',
    },
    {
      title: 'Гарантия качества',
      description: 'Обеспечиваем надёжность и стабильность работы всех систем.',
    },
  ];

  useEffect(() => {
    if (!isVisible) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reasons.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [isVisible, reasons.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="why-choose" className="why-choose fade-in-section" ref={ref} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(50px)' }}>
      <div className="container">
        <h2>Почему выбирают нас</h2>
        <div className="reasons-carousel">
          <div 
            className="carousel-track" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="reason-item"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s ease ${index * 100}ms`
                }}
              >
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-dots">
          {reasons.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Слайд ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
