import { writeFile } from 'node:fs/promises';

globalThis.reportError ??= console.error;

const scripts = [
	'./animations.js', './button.js', './forms.js', './misc.js', './properties.js', './reset.js',
	'./scrollbar.js', './styles.js', './theme.js', './properties-legacy.js', './presentation.js',
	'./layers.js', './custom-button.js',
];

class CSSStyleSheet {
	#text = '';
	#media = null;
	#disabled = false;

	constructor({ media = null, disabled = false } = {}) {
		this.#media = media;
		this.#disabled = disabled;
	}

	get media() {
		return this.#media;
	}

	get disabled() {
		return this.#disabled;
	}

	set disabled(val) {
		this,this.#disabled = val;
	}

	toString() {
		if (this.disabled) {
			return '';
		} else if (typeof this.#media === 'string') {
			return `@media ${this.#media} {${this.#text.trim()}}`;
		} else {
			return this.#text.trim();
		}
	}

	replaceSync(text) {
		this.#text = text;
	}

	async replace(text) {
		return Promise.try(() => this.replaceSync(text)).then(() => this);
	}
}

globalThis.CSS = { supports: () => true };
globalThis.CSSStyleSheet = CSSStyleSheet;
globalThis.document = {};
globalThis.matchMedia = media => {
	const mql = new MediaQueryList();
	mql.media = media;
	return mql;
};

globalThis.MediaQueryList = class MediaQueryList extends EventTarget {
	#media = null;

	get matches() {
		return true;
	}

	get media() {
		return this.#media;
	}

	set media(val) {
		this.#media = val;
	}

	toString() {
		return this.#media;
	}
};

async function saveSheet(path) {
	const module = await import(path);
	const sheets = Object.values(module).filter(exp => exp instanceof CSSStyleSheet && ! exp.disabled);

	if (sheets.length !== 0) {
		await writeFile(path.replace('./', './css/').replace('.js', '.css'), sheets.join('\n\n'));
		return true;
	} else {
		return false;
	}
}

await Promise.all(scripts.map(saveSheet));
