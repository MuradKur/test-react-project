import React from 'react';
import './style.scss';

export const LeftMenu = ({ onChange, active }) => {
  const getActive = (id) => {
    return id === active && "active";
  }

  const handleChangeSlides = (id) => {
    return () => {
      onChange(id);
    }
  }

  return (
    <div className="left-menu">
      <ul className="left-menu-navbar">
        <li onClick={handleChangeSlides(0)} className={getActive(0)}>архитектура</li>
        <li>Благоустройство</li>
        <li onClick={handleChangeSlides(1)} className={getActive(1)}>Безопастность</li>
        <li>Инженерия</li>
        <li>Инфраструктура</li>
        <li>Транспортная доступность</li>
      </ul>
      <p className="left-menu-copyright">Разработано в MST      |      2018</p>
    </div>
  );
}
