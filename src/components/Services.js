import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services = () => {
  const [ref, isVisible] = useScrollAnimation();

  const services = [
    {
      title: 'Автоматизация процессов',
      description: 'Создание систем, позволяющих автоматизировать процессы взвешивания и дозирования на производстве.',
      icon: 'https://img.icons8.com/?size=100&id=104233&format=png&color=000000',
      link: 'https://icons8.com/icon/12266/robot',
    },
    {
      title: 'Контроль качества',
      description: 'Повышение уровня контроля за производственными процессами благодаря специализированному ПО.',
      icon: 'https://img.icons8.com/?size=100&id=yVTxyscqiWtq&format=png&color=000000',
      link: 'https://icons8.com/icon/11902/quality',
    },
    {
      title: 'Типовые решения',
      description: 'Предоставление стандартных программных продуктов для быстрого внедрения.',
      icon: 'https://img.icons8.com/?size=100&id=43119&format=png&color=000000',
      link: 'https://icons8.com/icon/12008/template',
    },
    {
      title: 'Индивидуальная разработка',
      description: 'Создание уникальных решений под специфику каждого заказчика.',
      icon: 'https://img.icons8.com/?size=100&id=0HAGNdamoJug&format=png&color=000000',
      link: 'https://icons8.com/icon/12007/development',
    },
    {
      title: 'Интеграция с оборудованием',
      description: 'Разработка ПО, способного взаимодействовать с разнообразным промышленным оборудованием.',
      icon: 'https://img.icons8.com/?size=100&id=0dbdoPcVxc3N&format=png&color=000000',
      link: 'https://icons8.com/icon/12267/machine',
    },
    {
      title: 'Простота установки',
      description: 'Реализация удобных методов внедрения систем, облегчающих работу персонала предприятий.',
      icon: 'https://img.icons8.com/?size=100&id=eWjKgM6F199l&format=png&color=000000',
      link: 'https://icons8.com/icon/12005/install',
    },
  ];

  return (
    <section id="services" className="services fade-in-section" ref={ref} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(50px)' }}>
      <div className="container">
        <h2>Наши услуги</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-item"
              style={{ 
                transitionDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 100}ms`
              }}
            >
              <a href={service.link} target="_blank" rel="noopener noreferrer">
                <img src={service.icon} alt={service.title} width="64" height="64" />
              </a>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
