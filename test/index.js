import { addStyles, css } from '@aegisjsproject/core';
import {
	btn, btnPrimary, btnSuccess, btnDanger, btnWarning, reset, baseTheme, darkTheme,
	lightTheme, componentBase, componentBorder, registerProperties, customProperties,
	componentDarkTheme, componentLightTheme, properties,
} from '@aegisjsproject/styles';

const result = registerProperties(customProperties);

if (result instanceof Error) {
	console.error(result);
}

addStyles(document, btn, btnPrimary, btnSuccess, btnDanger, btnWarning, reset, baseTheme, darkTheme, lightTheme);

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
