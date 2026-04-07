import { css } from '@aegisjsproject/parsers/css.js';
import { scrollbarColor, scrollbarTrack } from './palette/aegis.js';

export const scrollbarFallback = css`@layer base.aegisjsproject.scrollbar {
	@supports not (scrollbar-color: currentColor transparent) {
		::-webkit-scrollbar {
			display: block;
		}

		::-webkit-scrollbar-thumb {
			background-color: var(--aegis-scrollbar-color, ${scrollbarColor});
		}

		::-webkit-scrollbar-track {
			background-color: var(--aegis-scrollbar-track, ${scrollbarTrack});
		}
	}
}`;

export const scrollbar = css`@layer base.aegisjsproject.scrollbar {
	:root {
		scrollbar-color: var(--aegis-scrollbar-color, ${scrollbarColor}) var(--aegis-scrollbar-track, ${scrollbarTrack});
		scrollbar-width: var(----aegis-scrollbar-width, auto);
	}
}`;

export const componentScrollbar = css`@layer component.aegisjsproject.scrollbar {
	:host {
		scrollbar-color: var(--aegis-scrollbar-color, ${scrollbarColor}) var(--aegis-scrollbar-track, ${scrollbarTrack});
		scrollbar-width: var(----aegis-scrollbar-width, auto);
	}
}`;
