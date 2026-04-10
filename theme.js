import { light, dark, gray } from './palette/bootstrap.js';
import { css } from '@aegisjsproject/parsers/css.js';

export const baseTheme = css`@layer base.aegisjsproject.theme {
	:root {
		color-scheme: light dark;
		font-family: var(--aegis-font, system-ui);
	}

	[data-theme="light"] {
		color-scheme: only light;
	}

	[data-theme="dark"] {
		color-scheme: only dark;
	}

	:root, [data-theme] {
		color: light-dark(var(--aegis-color-light, ${dark}), var(--aegis-color-dark, ${light}));
		background-color: light-dark(var(--aegis-bg-light, ${light}), var(--aegis-bg-dark, ${dark}));
	}
}`;

export const componentBase = css`@layer components.aegisjsproject.theme {
	:host {
		color: var(--aegis-color-light, ${light});
		color: light-dark(var(--aegis-color-light, ${dark}), var(--aegis-color-dark, ${light}));
		background-color: var(--aegis-bg-light, ${dark});
		background-color: light-dark(var(--aegis-bg-light, ${light}), var(--aegis-bg-dark, ${dark}));
		font-family: system-ui;
	}

	:host(:not([hidden]):not([popover])) {
		display: block;
	}

	:host([theme="light"]) {
		color-scheme: only light;
	}

	:host([theme="dark"]) {
		color-scheme: only dark;
	}
}`;

export const componentBorder = css`@layer components.aegisjsproject.theme {
	:host {
		border-width: 1px;
		border-style: solid;
		border-color: light-dark(var(--aegis-border-color-light, ${gray[2]}), var(--aegis-border-color-dark, ${gray[6]}));
		border-radius: var(--aegis-border-radius, 8px);
	}
}`;

/**
 * @deprecated
 *
 * Preserving sheets just to avoid breaking on import. Now using `color-scheme` & `light-dark()` only.
 */
export const componentDarkTheme = new CSSStyleSheet({ disabled: true });

/**
 * @deprecated
 *
 * Preserving sheets just to avoid breaking on import. Now using `color-scheme` & `light-dark()` only.
 */
export const componentLightTheme = new CSSStyleSheet({ disabled: true });

/**
 * @deprecated
 *
 * Preserving sheets just to avoid breaking on import. Now using `color-scheme` & `light-dark()` only.
 */
export const darkTheme = new CSSStyleSheet({ disabled: true });

/**
 * @deprecated
 *
 * Preserving sheets just to avoid breaking on import. Now using `color-scheme` & `light-dark()` only.
 */
export const lightTheme = new CSSStyleSheet({ disabled: true });
