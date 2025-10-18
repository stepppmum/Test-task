export function keyToObject(
	keys: string[],
	values: {[key: string]: any}
) {
	return Object.fromEntries(
		keys.map( ( key ) => [ key, values[ key ] ] )
	);
}