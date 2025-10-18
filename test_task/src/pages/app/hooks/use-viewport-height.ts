import { useEffect } from 'react';

export function useViewportHeight() {
	useEffect( () => {
		const handleResize = () => {
			const viewportHeight = window.document.documentElement.clientHeight;
			window.document.documentElement
				.style
				.setProperty( '--vh', `${viewportHeight / 100}px` );
		};
		handleResize();
		window.addEventListener( 'resize', handleResize );
		return () => {
			window.removeEventListener( 'resize', handleResize );
		};
	}, [] );
};
