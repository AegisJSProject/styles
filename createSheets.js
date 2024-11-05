import { writeFile } from 'node:fs/promises';

const scripts = [
	'./animations.js', './button.js', './forms.js', './misc.js', './properties.js', './reset.js',
	'./scrollbar.js', './styles.js', './theme.js',
];

class CSSStyleSheet {
	#text = '';

	toString() {
		return this.#text;
	}

	replaceSync(text) {
		this.#text = text;
	}

	async replace(text) {
		return Promise.resolve().then(() => this.replaceSync(text)).then(() => this);
	}
}

globalThis.CSSStyleSheet = CSSStyleSheet;
globalThis.document = {};
globalThis.MediaQueryList = class MediaQueryList extends EventTarget {};

async function saveSheet(path) {
	const module = await import(path);
	const sheets = Object.values(module).filter(exp => exp instanceof CSSStyleSheet);

	if (sheets.length !== 0) {
		await writeFile(path.replace('./', './css/').replace('.js', '.css'), sheets.join('\n\n'));
		return true;
	} else {
		return false;
	}
}

await Promise.all(scripts.map(saveSheet));
