import type { ComponentPropsWithoutRef, FC } from 'react';
import cn from 'classnames';

// import { Search as SearchIcon } from '@/common/icons/search';

import './search-input.styles.scss';

interface SearchInputProps extends ComponentPropsWithoutRef<'input'> {
	type?: 'search';
};


export const SearchInput: FC<SearchInputProps> = ( {
	className,
	...props
} ) => {
	return (
		<div className={cn( 'search-input', className )}>
			<input
				type="search"
				{...props}
			/>
			{/* <SearchIcon className="search-input__icon"/> */}
		</div>
	);
};
