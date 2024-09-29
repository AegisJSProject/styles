import { addStyles, css } from '@aegisjsproject/core';
import {
	btn, btnPrimary, btnSecondary, btnSuccess, btnInfo, btnDanger, btnWarning, reset, baseTheme, darkTheme,
	lightTheme, componentBase, componentBorder, componentDarkTheme, componentLightTheme, properties,
	btnLight, btnDark, btnLink,
} from '@aegisjsproject/styles';

addStyles(document, properties, btn, btnPrimary, btnSecondary, btnSuccess, btnInfo, btnDanger, btnWarning, reset, baseTheme, darkTheme, lightTheme, btnLight, btnDark, btnLink);

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

const btns = document.getElementById('btns');
['primary', 'secondary', 'success','info', 'warning', 'danger', 'light', 'dark', 'link'].forEach(t => {
	const btn = document.createElement('button');
	btn.classList.add('btn', 'btn-lg', 'btn-block', `btn-${t}`);
	btn.type = 'button';
	btn.textContent = t;
	btns.append(btn);
});
