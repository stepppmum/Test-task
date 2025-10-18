import type { FC } from 'react';
import cn from 'classnames';

import { SearchInput } from '@/components/search-input';

import './city-search.styles.scss';

interface CitySearchProps {
	className?: string;
};

export const CitySearch: FC<CitySearchProps> = ( {
	className,
} ) => {
	return (
		<section className={cn( 'city-search', className )}>
			<SearchInput
				className="city-search__input"
				defaultValue="Санкт-Петербург"
			/>
		</section>
	);
};
