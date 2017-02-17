export default function createGameItem(data) {

  const liItem = document.createElement('li');
  //adding a class of li
  liItem.classList.add('game-item');

  liItem.innerHTML = `
  <div class="frame">
    <h3 class="game-item__name"></h3>
    <h4 class="game-item__popularity"></h4>
  </div>
  <img src="" alt="" class="game-item__pic">
    `;

    const title = liItem.querySelector('.game-item__name');
    title.innerText = data.name;

    const popularity = liItem.querySelector('.game-item__popularity');
    popularity.innerText = (data.popularity) + ' Viewers';

    const pic = liItem.querySelector('.game-item__pic');
    pic.src = data.box.large;
    pic.alt = data.name;

    return liItem;
}
