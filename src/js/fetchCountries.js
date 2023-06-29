const MAIN_URL = `https://restcountries.com/v3.1/name/`;

export default function fetchCountry(country) {
  return fetch(`${MAIN_URL}${country}`).then(response => {
    return response.json();
  });
}
