import type { TimeZoneOffset } from './entities/time-zone';
import { TimeZoneName } from './entities/time-zone';
import type { API } from './api.types';

type GeoPoint = {
	latitude: number,
	longitude: number,
};


export class ForecastService {

	/** Запрос на api.open-meteo.com */
	static getForecastAt( point: GeoPoint, controller?: AbortController ) {
		return fetch( this._createURL( point ), {
			signal: controller?.signal,
		} )
			.then<API.Forecast>( ( response ) => {
				if ( !response.ok ) {
					throw new Error( `Request error (${response.status}): ${response.statusText}` );
				}
				return response.json();
			} );
	}

	private static _createURL( point: GeoPoint ): string {
		const url = new URL( 'https://api.open-meteo.com/v1/forecast' );

		url.searchParams.set( 'latitude', point.latitude.toString() );
		url.searchParams.set( 'longitude', point.longitude.toString() );
		url.searchParams.set(
			'hourly',
			[
				'temperature_2m',
				'apparent_temperature',
				'precipitation',
				'relativehumidity_2m',
				'pressure_msl',
				'weathercode',
				'windspeed_10m',
				'winddirection_10m',
				'windgusts_10m',
			].join( ',' )
		);
		url.searchParams.set(
			'daily',
			[
				'weathercode',
				'temperature_2m_max',
				'temperature_2m_min',
				'apparent_temperature_max',
			].join( ',' )
		);
		url.searchParams.set( 'windspeed_unit', 'ms' );
		url.searchParams.set( 'timezone', this._currentTimeZoneName() );

		return url.toString().replaceAll( encodeURIComponent( ',' ), ',' );
	}

	// private static _currentTimeZoneName(): string {
	// 	const hoursOffset = Math.floor( ( -1 * new Date().getTimezoneOffset() ) / 60 );
	// 	return TimeZoneName[
	// 		hoursOffset <= 12 && hoursOffset >= -12
	// 			? ( hoursOffset.toString() as TimeZoneOffset )
	// 			: '0'
	// 	];
	// }

	private static _currentTimeZoneName(): string {
		const hoursOffset = Math.floor((-1 * new Date().getTimezoneOffset()) / 60);
		return TimeZoneName[hoursOffset] ?? 'UTC';
	  }
	  
}
