import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Process = () => {
  const [ref, isVisible] = useScrollAnimation();

  const steps = [
    {
      number: '01',
      title: 'Консультация',
      description: 'Обсуждаем ваши потребности и специфику производства.',
    },
    {
      number: '02',
      title: 'Анализ',
      description: 'Проводим анализ процессов взвешивания и дозирования.',
    },
    {
      number: '03',
      title: 'Разработка',
      description: 'Создаем индивидуальное решение под ваши требования.',
    },
    {
      number: '04',
      title: 'Внедрение',
      description: 'Устанавливаем и настраиваем систему на вашем предприятии.',
    },
    {
      number: '05',
      title: 'Поддержка',
      description: 'Обеспечиваем техническую поддержку и сопровождение.',
    },
  ];

  return (
    <section id="process" className="process fade-in-section" ref={ref} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(50px)' }}>
      <div className="container">
        <h2>Как мы работаем</h2>
        <div className="steps">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="step"
              style={{ 
                transitionDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease ${index * 100}ms`
              }}
            >
              <div style={{ 
                fontSize: '3em', 
                fontWeight: '700', 
                background: 'linear-gradient(135deg, #007bff, #00d4ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '15px'
              }}>
                {step.number}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
