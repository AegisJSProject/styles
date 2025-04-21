import { css } from '@aegisjsproject/parsers/css.js';
import { customProperties } from './consts.js';

export const properties = css`${Object.entries(customProperties).map(
	([name, { initialValue, inherits = true, syntax = '*' }]) => `@property --aegis-${name} {
		syntax: "${syntax}";
		inherits: ${inherits};
		initial-value: ${initialValue};
	}`
).join('\n\n')}`;

// Only needed when using a bundled component - Prefer using global `@property` or `:root`
export const propertiesComponent = css`:host {
	${Object.entries(customProperties).map(([name, { initialValue }]) => `--aegis-${name}: ${initialValue};\n`).join('\n')}
}`;

export const propertiesLegacy = css`:root {
	${Object.entries(customProperties).map(([name, { initialValue }]) => `--aegis-${name}: ${initialValue};\n`).join('\n')}
}`;
