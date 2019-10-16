import './style.css';
import { devineLog } from './js/utility/helpers';
import data from './assets/data/coffees.json';

devineLog('Hey, ik ben een JS file');
const arr = [1, 2, 3];

const ES6Stuff = () => devineLog('Ik kan ES6 stuff aan', ...arr);
ES6Stuff();

console.log(data);

const init = data => {
  const $pricesList = document.querySelector('.prices__list');
  data.coffees.forEach(coffee => {
    if (coffee.plantbased === true) {
      const $li = document.createElement('li');
      $li.classList.add('price');
      $li.dataset.id = `${coffee.id}`
      $pricesList.appendChild($li);

      const $a = document.createElement('a');
      $a.classList.add('price__button');
      $li.appendChild($a);

      const $spanPriceWrp = document.createElement('span');
      $spanPriceWrp.classList.add('price__button__wrapper');
      $a.appendChild($spanPriceWrp);

      const $spanName = document.createElement('span');
      $spanName.classList.add('price__button__name');
      $spanName.textContent = `${coffee.name}`;
      $spanPriceWrp.appendChild($spanName);

      const $spanPrice = document.createElement('span');
      $spanPrice.classList.add('price__button__amount');
      $spanPrice.textContent = `€ ${coffee.prices.medium}`;
      $spanPriceWrp.appendChild($spanPrice);

      const $spanPlus = document.createElement('span');
      $spanPlus.classList.add('price__button__plus');
      $spanPlus.textContent ='+';
      $a.appendChild($spanPlus);

    }
  });
};

init(data);
