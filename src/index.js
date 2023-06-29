import fetchCountry from './js/fetchCountries';
const debounce = require('lodash.debounce');
import countryList from './templates/countryList';
import oneCountry from './templates/oneCountry';
import style from './css/style';

const userCountryInput = document.querySelector('#usercountry');
const mainBox = document.querySelector('#main-box');
const pageForm = document.querySelector('.main-section__form');

const pageInputListen = userCountryInput.addEventListener(
  'input',
  debounce(
    () =>
      fetchCountry(userCountryInput.value).then(array => {
        if (array.length > 10) {
          userBigQuery();
        } else if (array.length > 1 && array.length < 10) {
          mainBox.innerHTML = countryList(array);
        } else if (array.length === 1) {
          let arr = array[0];
          mainBox.innerHTML = oneCountry(arr);
        }
        pageForm.reset();
      }),
    1000
  )
);

function userBigQuery() {
  alert('слишком много совпадений');
}
