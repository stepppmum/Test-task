import React, { useEffect, useState } from "react";
import "./current-weather.styles.sass";
import cn from 'classnames';
import { Clock } from "@/components/clock/clock";
import { useIcons } from "../../../../public/assets/useIcons"

type CurrentWeatherProps = {
  className?: string;
};

type WeatherData = {
    city: string;
    temperature: number;
    apparentTemperature: number;
    humidity: number;
    pressure: number;
    precipitation: number;
    windSpeed: number;
    windDirection: string;
    weathercode: number;
};

const WEATHER_CODES: Record<number, string> = {
    0: "slight_touch_happyday",
    1: "partly_cloudy",
    2: "partly_cloudy",
    3: "cloudy",
    61: "rainy",
    71: "snowy",
    73: "snowy",
    75: "snowy",
    95: "thunderstorm",
};

export const CurrentWeather: React.FC<CurrentWeatherProps> = ({ className }) => {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const icons = useIcons();

    useEffect(() => {
        // Коородинаты Санкт-Петербурга
        const latitude = 59.9386;
        const longitude = 30.3141;


        const fetchWeather = async () => {
            try {
                const res = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,precipitation,pressure_msl,wind_speed_10m,wind_direction_10m,weathercode,relative_humidity_2m&timezone=auto`
                );

                if (!res.ok) throw new Error("Ошибка запроса");

                const data = await res.json();
                const current = data.current;

                const weatherData: WeatherData = {
                    city: "Санкт-Петербург",
                    temperature: current.temperature_2m,
                    apparentTemperature: current.apparent_temperature,
                    humidity: current.relative_humidity_2m,
                    pressure: current.pressure_msl,
                    precipitation: current.precipitation,
                    windSpeed: current.wind_speed_10m,
                    windDirection: getWindDirection(current.wind_direction_10m),
                    weathercode: current.weathercode,
                };
                setWeather(weatherData);

            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchWeather();

    }, []);

    const getWindDirection = (deg: number): string => {
        const dirs = ["С", "СВ", "В", "ЮВ", "Ю", "ЮЗ", "З", "СЗ"];
        return dirs[Math.round(deg / 45) % 8];
    };

    if (loading) return <div className={`current-weather ${className || ""}`}>Загрузка...</div>;
    if (error) return <div className={`current-weather ${className || ""}`}>Ошибка: {error}</div>;
    if (!weather) return null;


    return (
        <section className={cn( 'current-weather', className )}>
      
            <div className="town current-weather__town">
                <h1>{weather.city}</h1>
            </div>

            <Clock 
                className="clock current-weather__clock"
            />

            <div className="main current-weather__main">
                <div className="icon main__icon">
                    <img src={icons[WEATHER_CODES[weather.weathercode] || weather.weathercode]} />
                </div>

                <div className="temp main__temp">
                    <h1 className="actual-temp temp__actual-temp">
                        {weather.temperature > 0 ? '+' : ''}
                        {Math.round(weather.temperature)}°
                    </h1>
                    <p 
                        className="feeling-temp temp__feeling-temp">Ощущается {weather.temperature > 0 ? '+' : ''}
                        {Math.round(weather.apparentTemperature)}°
                    </p>
                </div>
            </div>

            <div className="details current-weather__details">
                <div>
                    Вероятность осадков: <strong>{weather.precipitation ?? 0}%</strong>
                </div>
                <div>
                    Влажность: <strong>{weather.humidity}%</strong>
                </div>
                <div>
                    Давление: <strong>{Math.round(weather.pressure)} мм</strong>
                </div>
                <div>
                    Осадки: <strong>{weather.precipitation ?? 0} мм</strong>
                </div>
                <div>
                    Ветер: <strong>{weather.windSpeed} м/с, {weather.windDirection}</strong>
                </div>
            </div>

        </section>
    );
};
