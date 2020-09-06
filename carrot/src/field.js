'use strict';
import * as sound from './sound.js';

export const itemType = Object.freeze({
  carrot: 'carrot',
  bug: 'bug',
});
export class Field {
  constructor(carrotCount, bugCount) {
    this.field = document.querySelector('.game__field');
    this.fieldRect = this.field.getBoundingClientRect();
    this.CARROT_COUNT = carrotCount;
    this.BUG_COUNT = bugCount;
    this.field.addEventListener('click', this.onClick);
  }

  setClickListener(onItemClick) {
    this.onItemClick = onItemClick;
  }

  init() {
    this.field.textContent = '';
    this._addItem('carrot', this.CARROT_COUNT, './src/img/carrot.png');
    this._addItem('bug', this.BUG_COUNT, './src/img/bug.png');
  }

  _addItem(className, count, imgPath) {
    const x1 = 0;
    const y1 = 0;
    const x2 = this.fieldRect.width - 80;
    const y2 = this.fieldRect.height - 80;

    for (let i = 0; i < count; i++) {
      const item = document.createElement('img');
      item.setAttribute('class', className);
      item.setAttribute('src', imgPath);
      item.style.position = 'absolute';

      const x = randomNumber(x1, x2);
      const y = randomNumber(y1, y2);
      item.style.top = `${y}px`;
      item.style.left = `${x}px`;

      this.field.appendChild(item);
    }
  }

  onClick = (event) => {
    const target = event.target;
    if (target.matches('.carrot')) {
      target.remove();
      sound.playCarrot();
      this.onItemClick && this.onItemClick(itemType.carrot);
    } else if (target.matches('.bug')) {
      this.onItemClick && this.onItemClick(itemType.bug);
    }
  };
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
