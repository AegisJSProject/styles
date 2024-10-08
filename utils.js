export async function sheetToFile(sheet, { filename = 'styles.css' } = {}) {
	const { promise, resolve, reject } = Promise.withResolvers();

	requestAnimationFrame(() => {
		try {
			resolve(new File(
				Array.from(sheet.rules, rule => rule.cssText),
				filename,
				{ type: 'text/css' }
			));
		} catch(err) {
			reject(err);
		}
	});

	return promise;
}

export async function sheetToLink(sheet, {
	crossOrigin = 'anonymous',
	referrerPolicy = 'no-referrer',
	fetchPriority = 'auto',
	integrity,
	blocking,
} = {}) {
	const link = document.createElement('link');
	link.relList.add('stylesheet');
	link.referrerPolicy = referrerPolicy;
	link.fetchPriority = fetchPriority;

	if (typeof integrity === 'string') {
		link.integrity = integrity;
	}

	if (typeof crossOrigin === 'string') {
		link.crossOrigin = crossOrigin;
	}

	if (typeof blocking === 'string') {
		link.blocking = blocking;
	}

	if (typeof sheet.media === 'string') {
		link.media = sheet.media;
	}

	if (sheet.disabled) {
		link.disabled = true;
	}

	link.href = URL.createObjectURL(await sheetToFile(sheet));
	return link;
}

export function registerProperties(props) {
	if (! (CSS.registerProperty instanceof Function)) {
		return new Error('`CSS.registerProperty` is not supported.');
	} else {
		const errs = [];

		Object.entries(props).forEach(([name, { initialValue, syntax = '*', inherits = true }]) => {
			try {
				CSS.registerProperty({ name: `--aegis-${name}`, syntax, initialValue, inherits });
			} catch(err) {
				errs.push(err);
			}
		});

		switch(errs.length) {
			case 0: return null;
			case 1: return errs[0];
			default: return new AggregateError(errs, 'Error registering custom properties.');
		}
	}
}

export const parseHex = hex => Uint8Array.fromHex(hex.substring(1));

export function clamp(min, value, max) {
	return Math.max(min, Math.min(value, max));
}

export function grayscale(hex, factor = 1) {
	const [r, g, b] = parseHex(hex);
	const grayness = Math.round((0.3 * r) + (0.59 * g) + (0.11 * b));

	return '#' + Uint8Array.from(
		[r, g, b],
		n => Math.round(clamp(0, (n * (1 - factor)) + (grayness * factor), 255))
	).toHex();
}

export function adjustBrightness(hex, delta) {
	const [r, g, b] = parseHex(hex);

	return '#' + new Uint8Array([
		clamp(0, r + delta, 255),
		clamp(0, g + delta, 255),
		clamp(0, b + delta, 255)
	]).toHex();
}
