export namespace API {

	export type Forecast = {
		hourly: {
			/** ВременнЫе метки
			 * @example ["2024-10-21T00:00", "2024-10-21T01:00", "2024-10-21T02:00"]
			 */
			time: string[],
			/** Температура (°C) */
			temperature_2m: number[],
			/** Ощущаемая температура (°C) */
			apparent_temperature: number[],
			/** Количество выпавших осадков за час (mm) */
			precipitation: number[],
			/** Относительная влажность (%) */
			relativehumidity_2m: number[],
			/** Давление (hPa) */
			pressure_msl: number[],
			/** Код погоды */
			weathercode: number[],
			/** Скорость ветра (m/s) */
			windspeed_10m: number[],
			/** Направление ветра (°) */
			winddirection_10m: number[],
			/** Направление ветра (m/s) */
			windgusts_10m: number[],
		},
		daily: {
			/** ВременнЫе метки
			 * @example ["2024-10-21", "2024-10-22", "2024-10-23"]
			 */
			time: string[],
			/** Код погоды */
			weathercode: number[],
			/** Максимальная температура (°C) */
			temperature_2m_max: number[],
			/** Минимальная температура (°C) */
			temperature_2m_min: number[],
			/** Максимальная ощущаемая температура °C */
			apparent_temperature_max: number[],
			/** Минимальная ощущаемая температура °C */
			apparent_temperature_min: number[],
		},
	};

}