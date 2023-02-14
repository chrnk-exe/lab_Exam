export default function byField<T>(fieldName: keyof T): (a: T, b: T) => number {
	return (a: T, b: T) => a[fieldName] > b[fieldName] ? 1 : -1;
}