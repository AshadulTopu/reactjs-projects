import { useEffect, useState } from "react";
import Search from "./../search/Search";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState({});

  // let url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
  // let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${api_key}`;
  let api_key = "f6531ca7e4772dba821f5a6cdda72127";

  const getWeather = async (searchQueryValue) => {
    const searchQuery = searchQueryValue || "";
    try {
      setLoading(true);
      let response = null;
      if (searchQuery.length === 0) {
        response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${api_key}`
        );
      } else {
        response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&units=metric&appid=${api_key}`
        );
      }

      // console.log(response);

      if (response !== null) {
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        successToGetLocation,
        errorToGetLocation
      );
    } else {
      console.log("Geolocation not supported");
    }
  };

  const successToGetLocation = (position) => {
    const { latitude, longitude } = position.coords;
    setLocation({ latitude, longitude });
    // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  };

  const errorToGetLocation = (error) => {
    console.log(error);
    console.log("Unable to retrieve your location");
  };

  useEffect(() => {
    getWeather();
    getLocation();
  }, []);

  console.log(weatherData);

  const handleSearch = async () => {
    getWeather(search);
  };

  const getCurrentDate = () => {
    const date = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div> Loading... </div>
      ) : (
        <div>
          {weatherData?.cod !== "400" ? (
            <div>
              <h1>Today Weather</h1>
              <h2>City: {weatherData?.name}</h2>
              <p>Temperature: {weatherData?.main?.temp}</p>
              <p>Feels Like: {weatherData?.main?.feels_like}</p>
              <p>Min Temperature: {weatherData?.main?.temp_min}</p>
              <p>Max Temperature: {weatherData?.main?.temp_max}</p>
              <p>Humidity: {weatherData?.main?.humidity}</p>
              <p>Pressure: {weatherData?.main?.pressure}</p>
              <p>Wind Speed: {weatherData?.wind?.speed}</p>
              <p>Wind Direction: {weatherData?.wind?.deg}</p>
              <p>Clouds: {weatherData?.clouds?.all}</p>
              <p>Timezone: {weatherData?.timezone}</p>
              <p>Time: {getCurrentDate(weatherData?.dt)}</p>
              <p>Visibility: {weatherData?.visibility}</p>
              <p>
                Description:{" "}
                {weatherData && weatherData?.weather[0]
                  ? weatherData?.weather[0]?.description
                  : ""}
              </p>
            </div>
          ) : (
            <div>City not found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Weather;
