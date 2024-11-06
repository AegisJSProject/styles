import { css } from '@aegisjsproject/core';
const { properties, propertiesLegacy, componentBase, componentBorder, componentDarkTheme, componentLightTheme, btn, reset, sheetToLink, ...styles } = await import('@aegisjsproject/styles');

document.head.append(await sheetToLink(propertiesLegacy));

document.adoptedStyleSheets = [btn, reset, properties, ...Object.values(styles).filter(mod => mod instanceof CSSStyleSheet)];

document.getElementById('toggle').addEventListener('click', async () => {
	switch(document.documentElement.dataset.theme) {
		case 'light':
			document.documentElement.dataset.theme = 'dark';
			break;

		case 'dark':
			document.documentElement.dataset.theme = 'auto';
			break;

		default:
			document.documentElement.dataset.theme = 'light';
	}

	document.getElementById('cur').textContent = document.documentElement.dataset.theme;

	await cookieStore.set({
		name: 'theme',
		value: document.documentElement.dataset.theme,
		path: '/test/',
		sameSite: 'strict',
		secure: true,
	});
});

cookieStore.get('theme').then(cookie => {
	if (typeof cookie?.value === 'string') {
		document.documentElement.dataset.theme = cookie.value;
		document.getElementById('cur').textContent = document.documentElement.dataset.theme;
	}
});

customElements.define('test-el', class TestElement extends HTMLElement {
	#shadow;

	constructor() {
		super();
		this.#shadow = this.attachShadow({ mode: 'closed' });
	}

	connectedCallback() {
		const slot = document.createElement('slot');
		slot.name = 'content';
		slot.textContent = 'Hello, World!';
		this.#shadow.adoptedStyleSheets = [
			componentBase, componentBorder, componentDarkTheme, componentLightTheme, btn, reset,
			css`:host {
				padding: 0.7em 0.3em;
				width: max-content;
				margin: 8px;
			}`
		];
		this.#shadow.append(slot);
	}
});

customElements.define('test-button', class TestButton extends HTMLElement {
	#shadow;
	#internals;

	constructor() {
		super();
		this.#shadow = this.attachShadow({ mode: 'open' });
		this.#internals = this.attachInternals();
		const slot = document.createElement('slot');
		slot.name = 'content';
		slot.textContent = 'No content';
		this.#shadow.append(slot);
		this.#internals.role = 'button';
		this.tabIndex = 0;
		this.classList.add('btn', 'btn-primary');

		Promise.all([
			new CSSStyleSheet().replace(`:host {
				appearance: button;
				background-color: ButtonFace;
				color: ButtonText;
				border: 1px solid ButtonBorder;
				padding: 2px 4px;
				border-radius: 4px;
			}`),
		]).then(sheets => this.#shadow.adoptedStyleSheets = sheets);
	}

	attributeChangedCallback(name, oldVal, newVal) {
		if (typeof newVal === 'string') {
			this.#internals.states.add('--disabled');
		} else {
			this.#internals.states.delete('--disabled');
		}
	}

	get disabled() {
		return this.hasAttribute('disabled');
	}

	set disabled(val) {
		this.toggleAttribute('disabled', val);
	}

	static get observedAttributes() {
		return ['disabled'];
	}
});

const btns = document.getElementById('btns');

[
	'primary','outline-primary', 'secondary', 'outline-secondary', 'success', 'outline-success', 'info', 'outline-info',
	'warning', 'outline-warning', 'danger', 'outline-danger', 'light', 'outline-light', 'dark',
	'outline-dark' ,'link', 'system', 'system-accent',
].forEach(t => {
	const btn = document.createElement('button');
	const disabled = document.createElement('button');
	btn.classList.add('btn', `btn-${t}`);
	disabled.classList.add('btn', `btn-${t}`, 'disabled');
	btn.type = 'button';
	btn.textContent = t;
	disabled.disabled = true;
	disabled.textContent = `${t} disabled`;
	btn.tabIndex = 0;
	disabled.tabIndex = 0;
	btns.append(btn, disabled);
});
