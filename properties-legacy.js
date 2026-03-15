import { css } from '@aegisjsproject/parsers/css.js';
import { customProperties } from './consts.js';

// Only needed when using a bundled component - Prefer using global `@property` or `:root`
export const propertiesComponent = css`:host {
	${Object.entries(customProperties).map(([name, { initialValue }]) => `--aegis-${name}: ${initialValue};\n`).join('\n')}
}`;

export const propertiesLegacy = css`:root {
	${Object.entries(customProperties).map(([name, { initialValue }]) => `--aegis-${name}: ${initialValue};\n`).join('\n')}
}`;
