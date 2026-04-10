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
	}

	:host(${DISABLED_SELECTOR}) {
		color: GrayText;
		border-color: color-mix(in srgb, GrayText, transparent 50%);
		background-color: color-mix(in srgb, ButtonFace, transparent 50%);
	}

	:host(:hover:not(${DISABLED_SELECTOR})) {
		background-color: color-mix(in srgb, ButtonFace, ButtonText 10%);
	}

	:host(:active:not(${DISABLED_SELECTOR})) {
		background-color: color-mix(in srgb, ButtonFace, ButtonText 20%);
	}
}`;
