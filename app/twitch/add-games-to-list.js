import createGameElement from './create-game-element';

export default function addGamesToList(parentEl, data) {
  // clears the list
  parentEl.innerHTML = '';

  for (let i = 0; i < data.length; i += 1) {
    const gameItem = data[i];
    const el = createGameElement(gameItem.game);

    parentEl.appendChild(el);
  }
}
