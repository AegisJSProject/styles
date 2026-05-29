import { red, blue, indigo, purple, pink, orange, yellow, teal, green, cyan, gray } from './palette/bootstrap.js';

const palette = new CSSStyleSheet();
const palettes = Object.entries({ red, blue, indigo, purple, pink, orange, yellow, teal, green, cyan, gray });

palette.replace(
	palettes.map(
		([label, colors]) => colors.map((shade, weight) => `@property --${label}-${(weight + 1) * 100} {
			syntax: "<color>";
			inherits: true;
			initial-value: ${shade};
		}`).join('\n')
	).join('\n')
);

export { palette };
