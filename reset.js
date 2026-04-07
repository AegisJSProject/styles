import { css } from '@aegisjsproject/parsers/css.js';

export const reset = css`@layer reset.aegisjsproject {
	:root {
		color-scheme: light dark;
		interpolate-size: allow-keywords;
		-webkit-text-size-adjust: none;
		text-size-adjust: none;
	}

	body {
		margin: 0;
		hanging-punctuation: first last;
		-webkit-font-smoothing: antialiased;
	}

	*, ::before, *::after {
		box-sizing: border-box;
		transition-behavior: allow-discrete;
	}

	h1, h2, h3, h4, h5, h6 {
		text-wrap: balance;
	}

	p {
		text-wrap: pretty;
	}

	p, h1, h2, h3, h4, h5, h6 {
		overflow-wrap: break-word;
	}

	input, button, textarea, select {
		font: inherit;
		color: inherit;
	}
}`;
