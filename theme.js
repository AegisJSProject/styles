import { light, dark, gray } from './palette/bootstrap.js';
import { css, createCSSParser } from '@aegisjsproject/parsers/css.js';

const darkCSS = createCSSParser({ media: '(prefers-color-scheme: dark)' });
const lightCSS = createCSSParser({ media: '(prefers-color-scheme: light)' });

export const baseTheme = css`:root {
	color-scheme: light dark;
	color: var(--aegis-color-light, ${dark});
	background-color: var(--aegis-bg-light, ${light});
	font-family: var(--aegis-font, system-ui);
}

:root[data-theme="light"] {
	color-scheme: light;
	color: var(--aegis-color-light, ${dark});
	background-color: var(--aegis-bg-light, ${light});
}

:root[data-theme="dark"] {
	color-scheme: dark;
	color: var(--aegis-color-dark, ${light});
	background-color: var(--aegis-bg-dark, ${dark});
}`;

export const darkTheme = darkCSS`:root:not([data-theme="light"]) {
	color: var(--aegis-color-dark, ${light});
	background-color: var(--aegis-bg-dark, ${dark});
}`;

export const lightTheme = lightCSS`:root:not([data-theme="dark"]) {
	color: var(--aegis-color-light, ${dark});
	background-color: var(--aegis-bg-light, ${light});
}`;

export const componentBase = css`:host {
	color-scheme: light dark;
	color: var(--aegis-color-light, ${dark});
	background-color: var(--aegis-bg-light, ${light});
	font-family: system-ui;
}

:host(:not([hidden]):not([popover])) {
	display: block;
}

:host-context([data-theme="light"]):host(:not([theme="dark"])) {
	color-scheme: light;
	color: var(--aegis-color-light, ${dark});
	background-color: var(--aegis-bg-light, ${light});
}

:host-context([data-theme="dark"]):host(:not([theme="light"])) {
	color-scheme: dark;
	color: var(--aegis-color-dark, ${light});
	background-color: var(--aegis-bg-dark, ${dark});
}

:host([theme="light"]) {
	color-scheme: light;
	color: var(--aegis-color-light, ${dark});
	background-color: var(--aegis-bg-light, ${light});
}

:host([theme="dark"]) {
	color-scheme: dark;
	color: var(--aegis-color-dark, ${light});
	background-color: var(--aegis-bg-dark, ${dark});
}`;

export const componentBorder = css`:host {
	border-width: 1px;
	border-style: solid;
	border-color: var(--aegis-border-color-light, ${gray[2]});
	border-radius: var(--aegis-border-radius, 8px);
}

:host([theme="light"]) {
	border-color: var(--aegis-border-color-light, ${gray[2]});
}

:host([theme="dark"]) {
	border-color: var(--aegis-border-color-dark, ${gray[6]});
}

:host-context([data-theme="light"]):host(:not([theme="dark"])) {
	border-color: var(--aegis-border-color-light, ${gray[2]});
}

:host-context([data-theme="dark"]):host(:not([theme="light"])) {
	border-color: var(--aegis-border-color-dark, ${gray[6]});
}

@media (prefers-color-scheme: dark) {
	:host(:not([theme="light"])) {
		border-color: var(--aegis-border-color-dark, ${gray[6]});
	}
}`;

export const componentDarkTheme = darkCSS`:host(:not([theme="light"])) {
	color-scheme: dark;
	color: var(--aegis-color-dark, ${light});
	background-color: var(--aegis-bg-dark, ${dark});
}`;

export const componentLightTheme = lightCSS`:host(:not([theme="dark"])) {
	color-scheme: light;
	color: var(--aegis-color-light, ${light});
	background-color: var(--aegis-bg-light, ${dark});
}`;
