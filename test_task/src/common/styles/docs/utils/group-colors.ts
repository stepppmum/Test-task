type Colors = {
	[ name: string ]: string
};

export function groupColors( colorsLib: Colors, groupPrefixes: string[] ) {
	const groups: Map<string, [string, string][]> = new Map();

	groupPrefixes.forEach( ( prefix ) => {
		groups.set( prefix, [] );
	} );
	const other: [string, string][] = [];
	groups.set( 'other', other );

	for ( const color of Object.entries( colorsLib ) ) {
		const prefix = color[0].split( '-' )[0];
		if ( groupPrefixes.includes( prefix ) ) {
			const group = groups.get( prefix )!;
			group.push( color );
		}
		else {
			other.push( color );
		}
	}
	return Object.fromEntries( groups.entries() );
}