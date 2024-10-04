import { css } from '@aegisjsproject/core/parsers/css.js';
import { scrollbarColor, scrollbarTrack } from './palette/aegis.js';

export const scrollbarFallback = css`@supports not (scrollbar-color: currentColor transparent) {
	::-webkit-scrollbar {
		display: block;
	}

	::-webkit-scrollbar-thumb {
		background-color: var(--aegis-scrollbar-color, ${scrollbarColor});
	}

	::-webkit-scrollbar-track {
		background-color: var(--aegis-scrollbar-track, ${scrollbarTrack});
	}
}`;

export const scrollbar = css`:root {
	scrollbar-color: var(--aegis-scrollbar-color, ${scrollbarColor}) var(--aegis-scrollbar-track, ${scrollbarTrack});
	scrollbar-width: var(----aegis-scrollbar-width, auto);
}`;

export const componentScrollbar = css`:host {
	scrollbar-color: var(--aegis-scrollbar-color, ${scrollbarColor}) var(--aegis-scrollbar-track, ${scrollbarTrack});
	scrollbar-width: var(----aegis-scrollbar-width, auto);
}`;
