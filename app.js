const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const cardDetails = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');
const weather = new Weather();

const updateUI = data => {
  const { cityDetails, weather } = data;

  // update details template
  cardDetails.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;${weather.Temperature.Metric.Unit}</span>
    </div> 
    `;

  // update the night/day & icon images
  let timeSrc = null;
  if(weather.IsDayTime) {
    timeSrc = 'img/day.svg';
  } else {
    timeSrc = 'img/night.svg';
  }
  time.setAttribute('src', timeSrc);

  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);

  // remove d-none class if present
  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }
};

cityForm.addEventListener('submit', e => {
  e.preventDefault();

  // get city value
  const city = e.target.elements[0].value.toLowerCase().trim();
  e.target.reset();

  // update ui with city

  weather.updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
});
