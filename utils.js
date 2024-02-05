export function sheetToFile(sheet, { filename = 'styles.css' } = {}) {
	return new File(Array.from(sheet.rules)
		.map(rule => rule.cssText), filename, { type: 'text/css' });
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

	link.href = URL.createObjectURL(sheetToFile(sheet));

	return link;
}
