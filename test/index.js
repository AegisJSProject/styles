import { css } from '@aegisjsproject/parsers/css.js';
import { componentBase, componentBorder } from '../theme.js';
import { presentation } from '../presentation.js';
import props from '../css/properties.css' with { type: 'css' };
import theme from '../css/theme.css' with { type: 'css' };
import btn from '../css/button.css' with { type: 'css' };
import layers from '../css/layers.css' with { type: 'css' };
import animations from '../css/animations.css' with { type: 'css' };
import customButton from '../css/custom-button.css' with { type: 'css' };

const { reset } = await import('@aegisjsproject/styles');

// document.head.append(await sheetToLink(propertiesLegacy));

document.adoptedStyleSheets = [layers, btn, reset, props, theme, presentation, animations];

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
			componentBase, componentBorder, btn, reset,
			css`:host {
				padding: 0.7em 0.3em;
				width: max-content;
			}`
		];
		this.#shadow.append(slot);
	}
});

customElements.define('test-button', class TestButton extends HTMLElement {
	#shadow = this.attachShadow({ mode: 'open' });
	#internals = this.attachInternals();
	#oldTabIndex = NaN;
	#controller;

	connectedCallback() {
		const slot = document.createElement('slot');
		slot.name = 'content';
		slot.textContent = 'No content';
		this.#shadow.append(slot);
		this.#internals.role = 'button';
		this.#controller = new AbortController();

		if (! (this.hasAttribute('tabindex') || this.disabled)) {
			this.tabIndex = 0;
		}

		this.#shadow.adoptedStyleSheets = [layers, customButton];

		this.addEventListener('keydown', event => {
			if (event.key === 'Enter' && ! this.disabled) {
				event.preventDefault();
				event.currentTarget.click();
			} else if (event.key === ' ' && ! this.disabled) {
				event.preventDefault();
			}
		}, { signal: this.#controller.signal });

		this.addEventListener('keyup', event => {
			if (event.key === ' ' && ! this.disabled) {
				event.preventDefault();
				event.currentTarget.click();
			}
		}, { signal: this.#controller.signal });

		this.addEventListener('click', ({ currentTarget }) => {
			if (currentTarget.classList.contains('btn')) {
				currentTarget.classList.remove('btn', 'btn-primary');
			} else {
				currentTarget.classList.add('btn', 'btn-primary');
			}
		});
	}

	attributeChangedCallback(name, oldVal, newVal) {
		switch(name) {
			case 'disabled':
				if (typeof newVal === 'string') {
					this.#oldTabIndex = this.hasAttribute('tabindex') ? this.tabIndex : 0;
					this.tabIndex = -1;
					this.#internals.states.add('disabled');
					this.#internals.ariaDisabled = 'true';

					if (this.ownerDocument.activeElement.isSameNode(this)) {
						this.blur();
					}
				} else {
					this.#internals.states.delete('disabled');
					this.#internals.ariaDisabled = null;
					this.tabIndex = Number.isNaN(this.#oldTabIndex) ? 0 : this.#oldTabIndex;
				}
				break;
		}
	}

	disconnectedCallback() {
		this.#controller.abort();
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
