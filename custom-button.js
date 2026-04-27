import { css } from '@aegisjsproject/parsers/css.js';

const DISABLED_SELECTOR = ':state(disabled)';

export const customButton = css`@layer components.aegisjsproject.button {
	:host {
		display: inline flow-root;
		appearance: button;
		user-select: none;
		white-space: nowrap;
		align-items: flex-start;
		text-align: center;
		cursor: default;
		box-sizing: border-box;
		background-color: ButtonFace;
		color: ButtonText;
		border: 1px outset ButtonBorder;
		border-radius: 2px;
		padding: 2px 6px;
		font-family: system-ui, -apple-system, sans-serif;
		font-size: small;
	}

	:host(:focus-visible) {
		/* Universal fallback for older engines or high contrast overrides */
		outline: auto;
		outline: 2px solid CanvasText;
		outline-offset: 2px;
	}

	/* WebKit & Blink (Chrome, Safari, Edge) native focus ring targeting */
	@supports (outline-color: -webkit-focus-ring-color) {
		:host(:focus-visible) {
			outline: 5px auto -webkit-focus-ring-color;
		}
	}

	/* Firefox cross-platform fallback (Windows, Android, Linux) */
	@supports (-moz-appearance: none) {
		:host(:focus-visible) {
			outline: 2px solid AccentColor;
		}
	}

	:host(${DISABLED_SELECTOR}) {
		color: GrayText;
		border-color: color-mix(in srgb, GrayText, transparent 50%);
		background-color: color-mix(in srgb, ButtonFace, transparent 50%);
		pointer-events: none;
	}

	:host(:hover:not(${DISABLED_SELECTOR})) {
		background-color: color-mix(in srgb, ButtonFace, ButtonText 10%);
	}

	:host(:active:not(${DISABLED_SELECTOR})) {
		background-color: color-mix(in srgb, ButtonFace, ButtonText 20%);
	}
}`;
