import type { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import './layout.styles.scss';

interface LayoutProps extends PropsWithChildren {
	className?: string;
};

export const Layout: FC<LayoutProps> = ( {
	className,
	children
} ) => {
	return (
		<div className={cn( 'layout', className )}>
			{children}
		</div>
	);
};
