export default function debounce(func, delay=250, immediate=false) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		}, delay);
		if (immediate && !timeout) func.apply(context, args);
	};
}