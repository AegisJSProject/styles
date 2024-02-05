import { light, dark } from './palette/bootstrap.js';
import { css, darkCSS, lightCSS } from '@shgysk8zer0/aegis';

export const baseTheme = css`:root {
	color-scheme: light dark;
	color: ${dark};
	background-color: ${light};
	font-family: system-ui;
}

:root[data-theme="light"] {
	color-scheme: light;
	color: ${dark};
	background-color: ${light};
}

:root[data-theme="dark"] {
	color-scheme: dark;
	color: ${light};
	background-color: ${dark};
}`;

export const darkTheme = darkCSS`:root:not([data-theme="light"]) {
	color: ${light};
	background-color: ${dark};
}`;

export const lightTheme = lightCSS`:root:not([data-theme="dark"]) {
	color: ${dark};
	background-color: ${light};
}`;

export const componentBase = css`:host {
	display: block;
	color-scheme: light dark;
	color: ${dark};
	background-color: ${light};
	font-family: system-ui;
}

:host([theme="light"]) {
	color-scheme: light;
}

:host([theme="dark"]) {
	color-scheme: dark;
	color: ${light};
	background-color: ${dark};
}`;

export const componentDarkTheme = darkCSS`:host(:not([theme="light"])) {
	color-scheme: dark;
	color: ${light};
	background-color: ${dark};
}`;

export const componentLightTheme = lightCSS`:host(:not([theme="dark"])) {
	color-scheme: light;
	color: ${dark};
	background-color: ${light};
}`;
