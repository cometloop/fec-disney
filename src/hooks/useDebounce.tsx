import { useEffect, useRef } from 'react';

type SomeFunction = (...args: any[]) => void;

export function useDebounce<Func extends SomeFunction>(
	func: Func,
	delay = 1000
) {
	const timer = useRef<NodeJS.Timer>();

	useEffect(() => {
		return () => {
			if (!timer.current) return;
			clearTimeout(timer.current);
		};
	}, []);

	const debouncedFunction = ((...args: any[]) => {
		const newTimer = setTimeout(() => {
			func(...args);
		}, delay);
		clearTimeout(timer.current);
		timer.current = newTimer;
	}) as Func;

	return debouncedFunction;
}
