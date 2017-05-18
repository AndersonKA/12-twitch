export default function createGameItem(data) {
  const liItem = document.createElement('li');
  // adding a class of li
  liItem.classList.add('game-item');
  liItem.classList.add('grid__item');

  liItem.innerHTML = `
  <img src="" alt="" class="game-item__pic">
  <div class="frame">
    <div class="game-item__name"></div>
    <div class="game-item__popularity"></div>
  </div>`;

  const title = liItem.querySelector('.game-item__name');
  title.innerText = data.name;

  const popularity = liItem.querySelector('.game-item__popularity');
  popularity.innerText = (data.popularity) + ' Viewers';

  const pic = liItem.querySelector('.game-item__pic');
  pic.src = data.box.large;
  pic.alt = data.name;

  return liItem;
}
