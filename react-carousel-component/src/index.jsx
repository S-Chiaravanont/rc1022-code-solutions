import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const url = [
  'https://asset.vg247.com/bulbasaur_1.jpg/BROK/thumbnail/1200x1200/quality/100/bulbasaur_1.jpg',
  'https://www.wargamer.com/wp-content/sites/wargamer/2022/09/how-many-pokemon-are-there-farfetchd-anime-screenshot.jpg',
  'https://editors.dexerto.com/wp-content/uploads/2022/05/02/Snorlax-weaknesses.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp-W0xLi9HjT7KPXaTTTbG6jWKM_vkYyXIug&usqp=CAU'
];

root.render(<Carousel url={url} />);
