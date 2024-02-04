export default function WeatherInfos({weather}) {

  return (
    <div className="card-infos">
      <div className="card-name">
        <h3>{weather?.location.name}</h3>
      </div>
      <div className="card-country">
        <h4>{weather?.location.country}</h4>
      </div>
      <div className="card-boxs">
        <div className="card-icon">
          <img src={`http:${weather?.current.condition.icon}`} alt={weather?.current.condition.text}/>
        </div>
        <div className="card-temp">
          <h5>Temperature (c°):</h5>
          <p>{weather?.current.condition.text}</p>
          <span>{weather?.current.temp_c}°c</span>
        </div>
      </div>
        <div className="card-map">
        <iframe 
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${weather?.location.lon}5!3d${weather?.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
        width="400" 
        height="450" 
        loading="lazy" 
        ></iframe>
        </div>
    </div>
  )

}