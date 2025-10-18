import type { FC } from 'react';
import cn from 'classnames';

// import { Map } from '@/components/map';

import './weekly-forecast.styles.scss';

interface WeeklyForecastProps {
	className?: string;
};


export const WeeklyForecast: FC<WeeklyForecastProps> = ( {
	className,
} ) => {
	return (
		<section className={cn( 'weekly-forecast', className )}>
			<h2 className="visually-hidden">Прогноз погоды</h2>
			<section>
				<h3>Погода на неделю в Санкт-Петербурге</h3>
				<div className="weekly-forecast__days"/>
			</section>
			<section>
				<h3>Карта погоды</h3>
				{/* <Map className="weekly-forecast__map"/> */}
			</section>
		</section>
	);
};