const key = 'i09cegdSHrEmu19VAGIbsl6WYKaIcgOG';

// get city information
const getCity = async city => {
  
  const query = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${city}`;
  const response = await fetch(query);
  const data = await response.json();
  return data[0];
};

// get current conditions information
const getCurrentConditions = async locationKey => {
  const query = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${key}`;
  const response = await fetch(query);
  const data = await response.json();
  return data[0];
};

