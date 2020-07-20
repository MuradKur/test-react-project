import React from 'react';
import { PagesNum } from '../PagesNum/PagesNum';
import illustration from '../../assets/Illustration.png';
import illustration2 from '../../assets/Illustration2.png';

export const Slides = ({ slide }) => {
  const slides = [
    {
      slide: (
        <>
          <div className="container">
            <div>
              <h1>Архитектура</h1>
              <p>Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни</p>
              <PagesNum active={slide + 1} count={6} />
            </div>
          </div>
          <img src={illustration} alt="illustration" />
        </>
      )
    },
    {
      slide: (
        <>
          <div className="container">
            <div>
              <h1>Безопастность</h1>
              <p>Современный двор европейского уровня — территория для детей, игр на свежем воздухе и вечерних</p>
              <PagesNum active={slide + 1} count={6} />
            </div>
          </div>
          <img src={illustration2} alt="illustration" />
        </>
      )
    }
  ];

  return <div className="content-block">{slides[slide]?.slide || slides[0].slide}</div>;
}
