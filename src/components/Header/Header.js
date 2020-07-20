import React from 'react';
import burger from '../../assets/IconBurger.png';
import './style.scss';

export const Header = () => {
  return (
    <header className="align-center header justify-between d-flex">
      <div className="align-center d-flex">
        <div className="container-block-logo">
          <div className="logo-block" />
        </div>
        <p className="ml-20">Первомайская</p>
      </div>
      <div>
        <ul className="d-flex navbar-list">
          <li>О комплексе</li>
          <li>Особенности</li>
          <li>Пентхаусы</li>
          <li>Выбрать квартиру</li>
        </ul>
      </div>
      <div className="align-center d-flex">
        <p className="mr-20">8 888 888 88 88</p>
        <div className="container-block-logo">
          <div className="logo-block">
            <img src={burger} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}
