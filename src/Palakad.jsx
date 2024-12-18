import React from 'react'
import useFetch from './useFetch';

const Palakad = () => {

    const weather = useFetch("https://api.openweathermap.org/data/2.5/weather?q=PALAKKAD&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric")
    console.log(weather);

  return (
    <div className='container my-5'>
    <div className='mx-auto rounder border text-center text-white p-4'style={{background:'#3B5FAB',width:'400px'}}>
      <h2 className='fw-bolder mb-5'>Weather Forecast</h2>

     {weather && (
       <div>
      <form className='d-flex mb-3'>
      <input className='form-control me-2'  placeholder="City" name='city'/>
      <button className='btn btn-outline-light' type="submit">Search</button>
      </form>

      <h1 className='display-4 fw-medium'>{weather.main.temp}°C</h1>
      <h1 className='mb-5'>{weather.name}</h1>

      <div className='row mb-3'>
        <div className='col'>
        <i className="fa-solid fa-water"></i> Humidity <br/>
        {weather.main.humidity}%        
          </div>
        <div className='col'>
        <i className="fa-solid fa-wind"></i> Wind Speed <br/>
          {weather.wind.speed} km/h
        </div>
      </div>
      </div>
      )}
    </div>
  </div>
  )
}

export default Palakad