import { light, dark } from './palette/bootstrap.js';
import { css, darkCSS, lightCSS } from '@aegisjsproject/core/parsers/css.js';

export const baseTheme = css`:root {
	color-scheme: light dark;
	color: var(--aegis-color-light, ${dark});
	background-color: var(--aegis-bg-light, ${light});
	font-family: system-ui;
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

/*:host(:not([popover])) {
	display: block;
}*/

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
