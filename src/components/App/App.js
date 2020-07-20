import React from 'react';
import { Header } from '../Header/Header';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import { Content } from '../Content/Content';
import './style.scss';

function App() {
  const [slide, setSlide] = React.useState(0);

  const handleChangeSlide = (count) => {
    setSlide(count);
  }

  return (
    <div className="App">
      <Header />
      <LeftMenu active={slide} onChange={handleChangeSlide} />
      <Content slide={slide} />
      <div className="right-block"></div>
      <footer />
    </div>
  );
}

export default App;
