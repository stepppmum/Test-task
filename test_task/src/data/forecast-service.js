"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForecastService = void 0;
var time_zone_1 = require("./entities/time-zone");
var ForecastService = /** @class */ (function () {
    function ForecastService() {
    }
    /** Запрос на api.open-meteo.com */
    ForecastService.getForecastAt = function (point, controller) {
        return fetch(this._createURL(point), {
            signal: controller === null || controller === void 0 ? void 0 : controller.signal,
        })
            .then(function (response) {
            if (!response.ok) {
                throw new Error("Request error (".concat(response.status, "): ").concat(response.statusText));
            }
            return response.json();
        });
    };
    ForecastService._createURL = function (point) {
        var url = new URL('https://api.open-meteo.com/v1/forecast');
        url.searchParams.set('latitude', point.latitude.toString());
        url.searchParams.set('longitude', point.longitude.toString());
        url.searchParams.set('hourly', [
            'temperature_2m',
            'apparent_temperature',
            'precipitation',
            'relativehumidity_2m',
            'pressure_msl',
            'weathercode',
            'windspeed_10m',
            'winddirection_10m',
            'windgusts_10m',
        ].join(','));
        url.searchParams.set('daily', [
            'weathercode',
            'temperature_2m_max',
            'temperature_2m_min',
            'apparent_temperature_max',
        ].join(','));
        url.searchParams.set('windspeed_unit', 'ms');
        url.searchParams.set('timezone', this._currentTimeZoneName());
        return url.toString().replaceAll(encodeURIComponent(','), ',');
    };
    ForecastService._currentTimeZoneName = function () {
        var hoursOffset = Math.floor((-1 * new Date().getTimezoneOffset()) / 60);
        return time_zone_1.TimeZoneName[hoursOffset <= 12 && hoursOffset >= -12
            ? hoursOffset.toString()
            : '0'];
    };
    return ForecastService;
}());
exports.ForecastService = ForecastService;
