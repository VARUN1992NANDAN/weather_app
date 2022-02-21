const key = ' tfO66PZhLTmCVxH5WjQlRe8Vdk3pXPio';

const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
  
    const response = await fetch(base + query);
    const data = await response.json();
  
    console.log(data)
  
  };

  getCity('bengaluru')
// get weather information
const getWeather = async (id) => {
  
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
  
    const response = await fetch(base + query);
    const data = await response.json();
  
    console.log(data)
  
  };
  getWeather("204108")