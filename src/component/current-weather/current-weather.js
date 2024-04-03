import "./current-weather.css"
const CurrentWeather = ({data}) => {
    return (
        <div className="weather-container">
            <div className="top">
                <div>
                    <p className="city">{data.name}</p>
                    <p className="weather-des">{data.weather[0].description}</p>
                </div>
                <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
            </div>

            <div className="bottom">
                <p className="temperature">{Math.round(data.main.temp)}°C</p>
                <div className="details">

                    <div className="details-row">
                        <span className="details-label detail-mar">Details</span>
                    </div>
                    <div className="details-row">
                        <span className="details-label">Feels like</span>
                        <span className="details-value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="details-row">
                        <span className="details-label">Wind</span>
                        <span className="details-value"> {data.wind.speed}m/s</span>
                    </div>
                    <div className="details-row">
                        <span className="details-label">Humidity</span>
                        <span className="details-value">{data.main.humidity}%</span>
                    </div>
                    <div className="details-row">
                        <span className="details-label">Pressure</span>
                        <span className="details-value">{data.main.pressure}hpa</span>
                    </div>

                </div>

            </div>
        </div>

    );
}
export default CurrentWeather;